// Simple in-memory rate limiting utility
// For production, consider using Redis or a more robust solution

const rateLimitMap = new Map();

export function rateLimit(identifier, maxRequests = 5, windowMs = 15 * 60 * 1000) {
  const now = Date.now();
  const key = identifier;

  // Clean up old entries periodically
  if (rateLimitMap.size > 1000) {
    for (const [k, v] of rateLimitMap.entries()) {
      if (now - v.windowStart > windowMs * 2) {
        rateLimitMap.delete(k);
      }
    }
  }

  const record = rateLimitMap.get(key) || { count: 0, windowStart: now };

  // Reset window if expired
  if (now - record.windowStart > windowMs) {
    record.count = 0;
    record.windowStart = now;
  }

  // Check if rate limit exceeded
  if (record.count >= maxRequests) {
    const timeUntilReset = Math.ceil((record.windowStart + windowMs - now) / 1000);
    return {
      success: false,
      message: `Rate limit exceeded. Try again in ${timeUntilReset} seconds.`,
      retryAfter: timeUntilReset
    };
  }

  // Increment counter
  record.count++;
  rateLimitMap.set(key, record);

  return {
    success: true,
    remaining: maxRequests - record.count
  };
}

export function getClientIP(request) {
  // Extract client IP from various possible headers
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');
  const cfIP = request.headers.get('cf-connecting-ip');

  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  return realIP || cfIP || 'unknown';
}
'use client';

import React, { useState, useEffect } from 'react';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  FileText, 
  DollarSign,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  Camera,
  Plus,
  ChevronDown,
  ChevronUp,
  Home
} from 'lucide-react';

const SummitDashboardPreview = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [expandedCustomer, setExpandedCustomer] = useState<string | null>(null);
  const [expandedTransaction, setExpandedTransaction] = useState<string | null>(null);
  const [animationPhase, setAnimationPhase] = useState(0);

  // Sample data based on your actual schema
  const customers = [
    { 
      id: '1', 
      full_name: 'Sarah Anderson', 
      business: 'Anderson Construction', 
      email: 'sarah@andersonconstruction.com', 
      phone: '(555) 234-5678', 
      status: 'qualified',
      created_at: '2024-01-15T10:00:00Z'
    },
    { 
      id: '2', 
      full_name: 'Mike Thompson', 
      business: 'Thompson Plumbing', 
      email: 'mike@thompsonplumbing.com', 
      phone: '(555) 345-6789', 
      status: 'proposal',
      created_at: '2024-01-12T14:30:00Z'
    },
    { 
      id: '3', 
      full_name: 'Lisa Rodriguez', 
      business: 'Rodriguez Electric', 
      email: 'lisa@rodriguezelectric.com', 
      phone: '(555) 456-7890', 
      status: 'closed',
      created_at: '2024-01-10T09:15:00Z'
    }
  ];

  const interactions = [
    {
      id: '1',
      customer_id: '1',
      customer_name: 'Sarah Anderson',
      type: 'call',
      title: 'Initial kitchen remodel consultation',
      notes: 'Discussed timeline and budget for full kitchen renovation. Client wants granite countertops.',
      outcome: 'Scheduled site visit for next week',
      follow_up_required: true,
      created_at: '2024-01-15T15:30:00Z'
    },
    {
      id: '2',
      customer_id: '2',
      type: 'email',
      title: 'Bathroom renovation quote follow-up',
      notes: 'Sent detailed quote for master bathroom renovation including materials list.',
      outcome: 'Awaiting client decision',
      follow_up_required: true,
      created_at: '2024-01-14T11:00:00Z'
    }
  ];

  const transactions = [
    {
      id: '1',
      type: 'income',
      category: 'Project Payment',
      description: 'Kitchen renovation - Anderson project',
      amount: '8500.00',
      timestamp: '2024-01-15T16:00:00Z',
      customer_name: 'Sarah Anderson',
      source: 'manual'
    },
    {
      id: '2',
      type: 'expense',
      category: 'Materials',
      description: 'Granite countertops - Home Depot',
      amount: '2340.50',
      timestamp: '2024-01-14T10:30:00Z',
      customer_name: 'Sarah Anderson',
      source: 'ai_agent'
    },
    {
      id: '3',
      type: 'expense',
      category: 'Tools',
      description: 'New tile saw - Lowes',
      amount: '189.99',
      timestamp: '2024-01-12T14:20:00Z',
      customer_name: null,
      source: 'manual'
    }
  ];

  // Calculate summary stats
  const totalIncome = transactions
    .filter(t => t.type === 'income')
    .reduce((sum, t) => sum + parseFloat(t.amount), 0);
  
  const totalExpenses = transactions
    .filter(t => t.type === 'expense')
    .reduce((sum, t) => sum + parseFloat(t.amount), 0);
  
  const netBalance = totalIncome - totalExpenses;

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const StatusBadge = ({ status }: { status: string }) => {
    const colors = {
      'lead': 'bg-sky-100 text-sky-800',
      'prospect': 'bg-yellow-100 text-yellow-800',
      'qualified': 'bg-purple-100 text-purple-800',
      'proposal': 'bg-indigo-100 text-indigo-800',
      'closed': 'bg-green-100 text-green-800',
      'contacted': 'bg-orange-100 text-orange-800'
    };
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800'}`}>
        {status}
      </span>
    );
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatCurrency = (amount: string | number) => {
    return `$${parseFloat(amount.toString()).toLocaleString(undefined, { minimumFractionDigits: 2 })}`;
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border max-w-6xl mx-auto">
      {/* Browser Header */}
      <div className="bg-gray-100 p-4 border-b flex items-center space-x-2">
        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
        <div className="flex-1 text-center text-sm text-gray-500 font-mono">
          summit.app/dashboard
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="h-[500px] overflow-hidden bg-slate-900 text-slate-100">
        {/* Sidebar */}
        <div className="flex">
          <div className="w-64 bg-slate-800 h-[500px] p-6">
            <h1 className="text-xl font-bold mb-8 text-white">Summit Automation</h1>
            <nav className="space-y-4">
              {[
                { id: 'dashboard', label: 'Dashboard', icon: Home },
                { id: 'crm', label: 'CRM', icon: Users },
                { id: 'bookkeeper', label: 'Bookkeeper', icon: BarChart3 }
              ].map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center space-x-2 w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    activeTab === id 
                      ? 'text-sky-400 font-semibold' 
                      : 'text-slate-100 hover:text-sky-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 overflow-y-auto">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white">Welcome to your Dashboard</h2>
                
                {/* Quick Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <DollarSign className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Net Balance</p>
                        <p className={`text-xl font-bold ${netBalance >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                          {formatCurrency(netBalance)}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Total Customers</p>
                        <p className="text-xl font-bold text-white">{customers.length}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Interactions</p>
                        <p className="text-xl font-bold text-white">{interactions.length}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
                  <div className="space-y-3">
                    {interactions.slice(0, 2).map((interaction) => (
                      <div key={interaction.id} className="flex items-start space-x-3 p-3 bg-slate-700 rounded-lg">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          {interaction.type === 'call' ? <Phone className="w-4 h-4 text-white" /> : <Mail className="w-4 h-4 text-white" />}
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-medium">{interaction.title}</p>
                          <p className="text-sm text-slate-400">{interaction.customer_name} • {formatDate(interaction.created_at)}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'crm' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-bold text-white">📇 Customer Relationship Manager</h2>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors">
                    + New Customer
                  </button>
                </div>

                {/* CRM Summary Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-sky-800 text-white rounded-lg p-4">
                    <h3 className="text-lg font-semibold">Total Customers</h3>
                    <p className="text-2xl font-bold">{customers.length}</p>
                  </div>
                  <div className="bg-indigo-700 text-white rounded-lg p-4">
                    <h3 className="text-lg font-semibold">Interactions Logged</h3>
                    <p className="text-2xl font-bold">{interactions.length}</p>
                  </div>
                  <div className="bg-slate-700 text-white rounded-lg p-4">
                    <h3 className="text-lg font-semibold">Avg. Interactions / Customer</h3>
                    <p className="text-2xl font-bold">
                      {customers.length > 0 ? (interactions.length / customers.length).toFixed(1) : '0.0'}
                    </p>
                  </div>
                </div>

                {/* Customer Table */}
                <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
                  <div className="p-4 border-b border-slate-700">
                    <h3 className="text-lg font-semibold text-white">Customer Directory</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-700 text-slate-100">
                        <tr>
                          <th className="p-3 text-left">Name</th>
                          <th className="p-3 text-left">Business</th>
                          <th className="p-3 text-left">Email</th>
                          <th className="p-3 text-left">Status</th>
                          <th className="p-3 text-left">Created</th>
                        </tr>
                      </thead>
                      <tbody>
                        {customers.map((customer) => (
                          <React.Fragment key={customer.id}>
                            <tr 
                              className="cursor-pointer hover:bg-slate-700 transition"
                              onClick={() => setExpandedCustomer(expandedCustomer === customer.id ? null : customer.id)}
                            >
                              <td className="p-3 text-white font-medium flex items-center">
                                {expandedCustomer === customer.id ? 
                                  <ChevronUp className="w-4 h-4 mr-2 text-slate-400" /> : 
                                  <ChevronDown className="w-4 h-4 mr-2 text-slate-400" />
                                }
                                {customer.full_name}
                              </td>
                              <td className="p-3 text-slate-300">{customer.business || <span className="italic text-slate-500">None</span>}</td>
                              <td className="p-3 text-slate-300">{customer.email}</td>
                              <td className="p-3">
                                <StatusBadge status={customer.status} />
                              </td>
                              <td className="p-3 text-slate-400">{formatDate(customer.created_at)}</td>
                            </tr>
                            {expandedCustomer === customer.id && (
                              <tr className="bg-slate-700">
                                <td colSpan={5} className="p-4">
                                  <div className="space-y-3">
                                    <h4 className="font-semibold text-white">Interactions for {customer.full_name}:</h4>
                                    {interactions
                                      .filter(i => i.customer_id === customer.id)
                                      .map(interaction => (
                                        <div key={interaction.id} className="bg-slate-600 rounded-lg p-3">
                                          <div className="flex justify-between items-start mb-2">
                                            <span className="font-medium text-white">{interaction.title}</span>
                                            <span className="text-xs bg-amber-500 text-white px-2 py-1 rounded uppercase">
                                              {interaction.type}
                                            </span>
                                          </div>
                                          <p className="text-sm text-slate-300 mb-2">{interaction.notes}</p>
                                          <div className="text-xs text-slate-400">
                                            Outcome: <span className="text-slate-300">{interaction.outcome}</span>
                                            {interaction.follow_up_required && (
                                              <span className="ml-4 text-red-400 font-bold">🔁 Follow-up required</span>
                                            )}
                                          </div>
                                        </div>
                                      ))}
                                  </div>
                                </td>
                              </tr>
                            )}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'bookkeeper' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-bold text-white">📒 Bookkeeper Dashboard</h2>
                  <div className="flex space-x-2">
                    <button className="bg-teal-700 text-white px-4 py-2 rounded hover:bg-teal-600 transition-colors">
                      ➕ Add Transaction
                    </button>
                    <button className="bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                      🧠 AI Receipt Upload
                    </button>
                  </div>
                </div>

                {/* Financial Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className={`rounded-lg p-4 ${netBalance >= 0 ? 'bg-green-900' : 'bg-red-700'} text-white`}>
                    <h3 className="text-xl font-semibold">Net Balance</h3>
                    <p className="text-2xl font-bold">{formatCurrency(netBalance)}</p>
                  </div>
                  <div className="bg-green-700 text-white rounded-lg p-4">
                    <h3 className="text-lg font-semibold">Total Income</h3>
                    <p className="text-2xl font-bold">{formatCurrency(totalIncome)}</p>
                  </div>
                  <div className="bg-red-900 text-white rounded-lg p-4">
                    <h3 className="text-lg font-semibold">Total Expenses</h3>
                    <p className="text-2xl font-bold">{formatCurrency(totalExpenses)}</p>
                  </div>
                </div>

                {/* AI Demo Animation */}
                {animationPhase === 2 && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 animate-pulse">
                    <div className="flex items-center space-x-2 text-blue-800">
                      <Camera className="w-5 h-5" />
                      <span className="font-medium">AI Processing Receipt...</span>
                    </div>
                    <div className="mt-2 text-sm text-blue-600">
                      Extracting: Home Depot - $234.56 - Materials - Granite countertops
                    </div>
                  </div>
                )}

                {/* Transaction Table */}
                <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
                  <div className="p-4 border-b border-slate-700">
                    <h3 className="text-lg font-semibold text-white">Recent Transactions</h3>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-slate-700 text-slate-100">
                        <tr>
                          <th className="p-3 text-left">Date</th>
                          <th className="p-3 text-left">Category</th>
                          <th className="p-3 text-left">Description</th>
                          <th className="p-3 text-right">Amount</th>
                          <th className="p-3 text-center">Type</th>
                          <th className="p-3 text-center">Source</th>
                        </tr>
                      </thead>
                      <tbody>
                        {transactions
                          .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
                          .map((transaction) => (
                            <React.Fragment key={transaction.id}>
                              <tr 
                                className={`cursor-pointer transition-colors ${
                                  transaction.type === 'income' 
                                    ? 'bg-green-700 hover:bg-green-600 text-white' 
                                    : 'bg-red-800 hover:bg-red-700 text-white'
                                }`}
                                onClick={() => setExpandedTransaction(expandedTransaction === transaction.id ? null : transaction.id)}
                              >
                                <td className="p-3">{formatDate(transaction.timestamp)}</td>
                                <td className="p-3">{transaction.category}</td>
                                <td className="p-3">{transaction.description}</td>
                                <td className="p-3 text-right font-medium">{formatCurrency(transaction.amount)}</td>
                                <td className="p-3 text-center capitalize">{transaction.type}</td>
                                <td className="p-3 text-center">
                                  <span className={`px-2 py-1 rounded text-xs ${
                                    transaction.source === 'ai_agent' 
                                      ? 'bg-blue-600 text-white' 
                                      : 'bg-gray-600 text-white'
                                  }`}>
                                    {transaction.source === 'ai_agent' ? '🤖 AI' : '✋ Manual'}
                                  </span>
                                </td>
                              </tr>
                              {expandedTransaction === transaction.id && (
                                <tr className="bg-gradient-to-br from-slate-700 to-slate-800">
                                  <td colSpan={6} className="p-4">
                                    <div className="space-y-2 text-sm">
                                      <div>
                                        <span className="font-semibold text-white">Customer:</span>{' '}
                                        {transaction.customer_name ? (
                                          <span className="text-slate-300">{transaction.customer_name}</span>
                                        ) : (
                                          <span className="italic text-slate-500">Unlinked</span>
                                        )}
                                      </div>
                                      <div>
                                        <span className="font-semibold text-white">Source:</span>{' '}
                                        <span className="text-slate-300 capitalize">{transaction.source.replace('_', ' ')}</span>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              )}
                            </React.Fragment>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummitDashboardPreview;
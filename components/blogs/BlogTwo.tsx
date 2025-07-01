'use client'
import React, { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, Star, Target, TrendingUp, Instagram, DollarSign, Users, Heart, Zap, Camera, Play, MessageCircle, Eye, Trophy, Lightbulb, Shield, BookOpen, CheckCircle } from 'lucide-react';

const BlogTwo = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const contentTypes = [
    {
      type: 'Photos',
      icon: Camera,
      pros: ['Versatile content', 'Easy production', 'High retention', 'Visually appealing'],
      cons: ['Low engagement', 'Limited storytelling'],
      reach: 'Medium to High',
      time: 'Instant to low',
      color: 'from-pink-500 to-purple-500'  
    },
    {
      type: 'Videos',
      icon: Play,
      pros: ['Highly engaging', 'In-depth storytelling', 'Algorithm favorite', 'Detailed showcase'],
      cons: ['High production cost', 'Requires technical skills'],
      reach: 'High and wide reach',
      time: 'Time-consuming',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      type: 'Reels',
      icon: Zap,
      pros: ['Very high engagement', 'Viral potential', 'Algorithm favorite', 'Trend participation'],
      cons: ['Competitive', 'Time-sensitive trends'],
      reach: 'Very wide and viral',
      time: 'Medium to high',
      color: 'from-orange-500 to-red-500'
    },
    {
      type: 'Stories',
      icon: MessageCircle,
      pros: ['Interactive features', 'Real-time connection', 'Traffic-driving', 'Instant share'],
      cons: ['24-hour lifespan', 'Limited reach'],
      reach: 'Existing followers',
      time: 'Instant to medium',
      color: 'from-green-500 to-teal-500'
    },
    {
      type: 'Live Streams',
      icon: Eye,
      pros: ['Real-time interaction', 'High collaboration', 'Instant notification', 'Authenticity'],
      cons: ['Requires engagement', 'Potential for errors'],
      reach: 'Existing followers',
      time: 'Instant to high',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const monetizationMethods = [
    {
      method: 'Sponsored Posts',
      popularity: 9,
      revenue: 8,
      rates: {
        'Nano (< 1K)': '$10 - $100',
        'Micro (1K-10K)': '$50 - $250',
        'Mid-tier (10K-100K)': '$300 - $750',
        'Macro (100K-1M)': '$1K - $10K',
        'Mega (1M+)': '$10K+'
      },
      color: 'from-blue-500 to-purple-500'
    },
    {
      method: 'Affiliate Marketing',
      popularity: 8,
      revenue: 6,
      rates: {
        'Low-price products': '5% - 10%',
        'High-ticket items': '20% - 50%'
      },
      color: 'from-green-500 to-teal-500'
    },
    {
      method: 'Own Products/Services',
      popularity: 8,
      revenue: 9,
      rates: {
        'Return': '90-100% minus costs'
      },
      color: 'from-orange-500 to-red-500'
    },
    {
      method: 'Exclusive Content',
      popularity: 7,
      revenue: 7,
      rates: {
        'Subscription': '100% minus taxes'
      },
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const faqs = [
    {
      question: "What is an Instagram influencer?",
      answer: "An Instagram influencer is someone who has built a dedicated presence on Instagram and established credibility within a niche. They create engaging content that influences their audience's opinions, behaviors, and purchasing decisions."
    },
    {
      question: "How many followers do I need to be an influencer?",
      answer: "There's no specific number of followers required. Being an influencer is more about your engagement and authority within your niche. You can start monetizing with a few thousand highly engaged followers."
    },
    {
      question: "How much can I make with 1 million followers?",
      answer: "A mega-influencer (1 million+ followers) can earn around $15,000 per month or more. However, earnings depend on factors like niche, engagement rate, authority, and brand partnerships."
    },
    {
      question: "Should I start a new Instagram account?",
      answer: "It's not always necessary. If your existing account aligns with your niche and has followers, you can repurpose it. However, a new account allows you to start fresh with focused identity."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600/20 to-cyan-600/20">

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 mb-6">
            <Trophy className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-300 text-sm font-medium">Complete 2025 Guide</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            How To Become An 
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Instagram Influencer</span>
            <br />And Make Money
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8 leading-relaxed">
            Step-by-step guide to becoming a successful Instagram influencer in 2025 and monetizing your profile. 
            From finding your niche to earning your first $10,000+
          </p>

          <div className="flex items-center justify-center space-x-6 text-slate-400 mb-12">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">June 30, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">25 min read</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span className="text-sm">Influencer Experts</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <Users className="w-8 h-8 text-purple-400 mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Build Audience</h3>
              <p className="text-slate-300 text-sm">Grow from 0 to 100K+ engaged followers using proven strategies</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <DollarSign className="w-8 h-8 text-green-400 mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Monetize</h3>
              <p className="text-slate-300 text-sm">Turn your influence into multiple income streams</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
              <TrendingUp className="w-8 h-8 text-cyan-400 mb-3 mx-auto" />
              <h3 className="text-white font-semibold mb-2">Scale Up</h3>
              <p className="text-slate-300 text-sm">Future-proof your career and build lasting success</p>
            </div>
          </div>
        </div>

        {/* Step-by-Step Guide */}
        <section id="guide" className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            6-Step Roadmap to
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Instagram Success</span>
          </h2>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-slate-800/40 rounded-2xl p-8 border border-slate-700/40">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">1</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">Choose Your Niche & Identify Your Audience</h3>
                  <p className="text-slate-300 text-lg mb-6">
                    In 2025, standing out on Instagram requires more than just passion. You need to be an expert to earn credibility and authority. 
                    Choose a niche that excites you AND has growth potential.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-700/50 rounded-lg p-6">
                      <h4 className="text-purple-300 font-semibold mb-3 flex items-center">
                        <Target className="w-5 h-5 mr-2" />
                        Why You Need a Niche
                      </h4>
                      <ul className="text-slate-300 space-y-2 text-sm">
                        <li>• Establishes you as an authority</li>
                        <li>• Attracts your ideal audience</li>
                        <li>• Higher engagement rates</li>
                        <li>• Better monetization opportunities</li>
                      </ul>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-6">
                      <h4 className="text-cyan-300 font-semibold mb-3 flex items-center">
                        <Lightbulb className="w-5 h-5 mr-2" />
                        2025 Trending Niches
                      </h4>
                      <ul className="text-slate-300 space-y-2 text-sm">
                        <li>• AI & Tech integration</li>
                        <li>• Sustainable living</li>
                        <li>• Digital wellness</li>
                        <li>• Remote work lifestyle</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-800/40 rounded-2xl p-8 border border-slate-700/40">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">2</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-4">Optimize Your Instagram Profile</h3>
                  <p className="text-slate-300 text-lg mb-6">
                    Your profile is your digital storefront. Make it count with clear branding, compelling bio, and strategic optimization.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                      <h4 className="text-cyan-300 font-semibold mb-2">Username</h4>
                      <p className="text-slate-300 text-sm">Clear, memorable, searchable</p>
                    </div>
                    <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                      <h4 className="text-cyan-300 font-semibold mb-2">Bio</h4>
                      <p className="text-slate-300 text-sm">Tell who you are, what you offer, why follow</p>
                    </div>
                    <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                      <h4 className="text-cyan-300 font-semibold mb-2">Visual Identity</h4>
                      <p className="text-slate-300 text-sm">Consistent colors, style, grid layout</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 - Content Creation */}
            <div className="bg-slate-800/40 rounded-2xl p-8 border border-slate-700/40">
              <div className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">3</div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-6">Create High-Quality Content</h3>
                  
                  <div className="grid gap-6">
                    {contentTypes.map((content, index) => {
                      const IconComponent = content.icon;
                      return (
                        <div key={index} className="bg-slate-700/30 rounded-lg p-6 border border-slate-600/30">
                          <div className="flex items-center mb-4">
                            <div className={`w-10 h-10 bg-gradient-to-r ${content.color} rounded-lg flex items-center justify-center mr-4`}>
                              <IconComponent className="w-5 h-5 text-white" />
                            </div>
                            <h4 className="text-xl font-bold text-white">{content.type}</h4>
                          </div>
                          
                          <div className="grid md:grid-cols-4 gap-4">
                            <div>
                              <h5 className="text-green-400 font-semibold mb-2">Pros ✅</h5>
                              <ul className="text-slate-300 text-sm space-y-1">
                                {content.pros.map((pro, i) => <li key={i}>• {pro}</li>)}
                              </ul>
                            </div>
                            <div>
                              <h5 className="text-red-400 font-semibold mb-2">Cons ❌</h5>
                              <ul className="text-slate-300 text-sm space-y-1">
                                {content.cons.map((con, i) => <li key={i}>• {con}</li>)}
                              </ul>
                            </div>
                            <div>
                              <h5 className="text-blue-400 font-semibold mb-2">Reach 🎯</h5>
                              <p className="text-slate-300 text-sm">{content.reach}</p>
                            </div>
                            <div>
                              <h5 className="text-purple-400 font-semibold mb-2">Time ⏳</h5>
                              <p className="text-slate-300 text-sm">{content.time}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Steps 4-6 Summary */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800/40 rounded-xl p-6 border border-slate-700/40">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">4</div>
                <h3 className="text-xl font-bold text-white mb-3">Grow Your Following</h3>
                <p className="text-slate-300 mb-4">Use organic strategies, engage with communities, and leverage Instagram's algorithm</p>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• Post consistently (3-5x weekly)</li>
                  <li>• Use relevant hashtags strategically</li>
                  <li>• Collaborate with other creators</li>
                  <li>• Engage with your niche community</li>
                </ul>
              </div>

              <div className="bg-slate-800/40 rounded-xl p-6 border border-slate-700/40">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">5</div>
                <h3 className="text-xl font-bold text-white mb-3">Monetize Your Account</h3>
                <p className="text-slate-300 mb-4">Turn your influence into multiple revenue streams</p>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• Sponsored posts & brand deals</li>
                  <li>• Affiliate marketing</li>
                  <li>• Sell your own products/services</li>
                  <li>• Exclusive content subscriptions</li>
                </ul>
              </div>

              <div className="bg-slate-800/40 rounded-xl p-6 border border-slate-700/40">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4">6</div>
                <h3 className="text-xl font-bold text-white mb-3">Future-Proof Career</h3>
                <p className="text-slate-300 mb-4">Build sustainable, long-term success</p>
                <ul className="text-slate-300 text-sm space-y-2">
                  <li>• Stay updated on algorithm changes</li>
                  <li>• Diversify across platforms</li>
                  <li>• Continuous learning & skill development</li>
                  <li>• Maintain authenticity & ethics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Monetization Section */}
        <section id="monetization" className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            4 Ways to
            <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent"> Monetize Your Influence</span>
          </h2>

          <div className="grid gap-8">
            {monetizationMethods.map((method, index) => (
              <div key={index} className="bg-slate-800/40 rounded-xl p-8 border border-slate-700/40">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">{method.method}</h3>
                  <div className="flex space-x-4">
                    <div className="text-center">
                      <div className="text-sm text-slate-400">Popularity</div>
                      <div className="text-lg font-bold text-purple-400">{method.popularity}/10</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-slate-400">Revenue</div>
                      <div className="text-lg font-bold text-green-400">{method.revenue}/10</div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {Object.entries(method.rates).map(([tier, rate]) => (
                    <div key={tier} className={`bg-gradient-to-r ${method.color} bg-opacity-10 border border-opacity-20 rounded-lg p-4`}>
                      <div className="text-white font-semibold">{tier}</div>
                      <div className="text-slate-300">{rate}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="mb-16">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Frequently Asked
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Questions</span>
          </h2>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-slate-800/40 rounded-xl border border-slate-700/40 overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full text-left p-6 flex items-center justify-between hover:bg-slate-700/20 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
                  <ArrowRight className={`w-5 h-5 text-purple-400 transition-transform ${expandedFaq === index ? 'rotate-90' : ''}`} />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-2xl p-12 border border-purple-500/20 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Influencer Journey?</h2>
          <p className="text-slate-300 text-xl mb-8 max-w-2xl mx-auto">
            The influencer economy is booming in 2025. Don't miss your chance to turn your passion into profit and build a thriving personal brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center justify-center">
              Start Building Your Brand
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="border border-purple-500/50 text-purple-300 px-8 py-4 rounded-lg font-semibold hover:bg-purple-500/10 transition-all duration-300">
              Download Free Checklist
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
            <p className="text-slate-400 italic mb-4">
              "The best time to start was yesterday. The second best time is now. Your audience is waiting for what only you can offer."
            </p>
            <div className="flex items-center justify-center space-x-4 text-slate-500 text-sm">
              <span>© 2025 Influencer Hub</span>
              <span>•</span>
              <span>Built for aspiring creators</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTwo;
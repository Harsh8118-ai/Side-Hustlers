import React from 'react';
import { Calendar, Clock, User, ArrowRight, Star, Target, TrendingUp, DollarSign, Users, BookOpen, Zap } from 'lucide-react';

const MainBlog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-600/20 to-cyan-600/20">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Blog Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 mb-6">
            <Star className="w-4 h-4 text-purple-400 mr-2" />
            <span className="text-purple-300 text-sm font-medium">Instagram Growth Playbook</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            The Complete Guide to Instagram Monetization in 
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"> 2025</span>
          </h1>

          <div className="flex items-center justify-center space-x-6 text-slate-400 mb-8">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm">September 13, 2025</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span className="text-sm">15 min read</span>
            </div>
            <div className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span className="text-sm">Side Hustlers Team</span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-invert prose-lg max-w-none">
          {/* Intro */}
          <div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 mb-8">
            <p className="text-slate-300 text-lg leading-relaxed mb-6">
              Instagram has transformed from a simple photo-sharing app into one of the most powerful tools for personal branding, marketing, and income generation. With over a billion active users, the platform offers endless opportunities for creators, influencers, and businesses to build real income streams.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              In this guide, Side Hustlers shows you how to leverage Instagram monetization to create sustainable revenue in 2025 and beyond.
            </p>
          </div>

          {/* Key Highlights */}
          <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl p-8 border border-purple-500/20 mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Zap className="w-6 h-6 text-yellow-400 mr-3" />
              Key Takeaways
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <Target className="w-8 h-8 text-purple-400 mb-3" />
                <h3 className="text-white font-semibold mb-2">Personal Branding</h3>
                <p className="text-slate-300 text-sm">Define your niche, visual style, and tone to stand out in a crowded space.</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <Users className="w-8 h-8 text-cyan-400 mb-3" />
                <h3 className="text-white font-semibold mb-2">Organic Growth</h3>
                <p className="text-slate-300 text-sm">Post consistently, engage with your audience, and collaborate with creators.</p>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
                <DollarSign className="w-8 h-8 text-green-400 mb-3" />
                <h3 className="text-white font-semibold mb-2">Monetization Tools</h3>
                <p className="text-slate-300 text-sm">Use affiliate marketing, subscriptions, and Instagram Shops for income.</p>
              </div>
            </div>
          </div>

          {/* Core Sections */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Proven Ways to Monetize Instagram</h2>
            <div className="space-y-8">
              {[
                { title: 'Build a Strong Personal Brand', desc: 'A clear personal brand attracts followers and brands. Define your niche, visual style, and tone to make your profile memorable.' },
                { title: 'Grow Your Audience Organically', desc: 'Leverage hashtags, collaborations, and consistent engagement to gain followers who genuinely trust your recommendations.' },
                { title: 'Partner with Brands', desc: 'Create media kits, pitch brands, and collaborate authentically for sponsored content that fits your audience.' },
                { title: 'Sell Your Own Products or Services', desc: 'Use Instagram Shop or promote coaching, courses, and physical products directly from your profile.' },
                { title: 'Affiliate Marketing', desc: 'Promote products with affiliate links through Stories and bio placements to earn passive income.' },
                { title: 'Subscriptions & Badges', desc: 'Offer exclusive content through Instagram’s built-in monetization tools for direct fan support.' },
                { title: 'Digital Products & Webinars', desc: 'Sell eBooks, presets, or host paid workshops to monetize your expertise.' },
                { title: 'Leverage Reels', desc: 'Reels offer maximum reach and access to Instagram’s bonus programs—use them to expand visibility.' },
              ].map((item, index) => (
                <div key={index} className="bg-slate-800/40 rounded-xl p-6 border border-slate-700/40">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-sm mr-3">{index + 1}</div>
                    {item.title}
                  </h3>
                  <p className="text-slate-300">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Next Steps */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-6">Next Steps for Long-Term Success</h2>
            <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/30">
              <p className="text-slate-300 text-lg leading-relaxed mb-4">
                The online course industry is booming, but most courses fail due to poor usability and engagement. Average completion rates can be as low as 5-15%.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                The solution lies in intuitive platforms, interactive content, and a strong marketing strategy. Monetizing Instagram effectively is your first step toward creating engaging learning ecosystems and digital businesses.
              </p>
            </div>
          </section>

          {/* Call to Action */}
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 rounded-2xl p-8 border border-purple-500/20 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Monetize Your Instagram?</h2>
            <p className="text-slate-300 text-lg mb-6">
              Choose one monetization method today and start building a real income stream with Side Hustlers.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 flex items-center mx-auto">
              Start Monetizing Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </article>
      </div>
    </div>
  );
};

export default MainBlog;

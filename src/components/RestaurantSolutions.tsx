import { Utensils, Clock, Star, ShoppingBag, CreditCard } from 'lucide-react';

const RestaurantSolutions = () => {
  const integrations = [
    { name: 'DoorDash', icon: <ShoppingBag className="w-5 h-5" />, color: 'bg-[#FF3008]' },
    { name: 'GrubHub', icon: <Utensils className="w-5 h-5" />, color: 'bg-[#FF0016]' },
    { name: 'UberEats', icon: <ShoppingBag className="w-5 h-5" />, color: 'bg-black' },
    { name: 'Toast', icon: <CreditCard className="w-5 h-5" />, color: 'bg-[#FF5A00]' },
  ];

  return (
    <section id="restaurants" className="py-24 bg-gradient-to-b from-[#050505] to-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              <Utensils size={14} />
              Hospitality OS
            </div>
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              Your Restaurant, <br />
              <span className="gradient-text">Fully Automated.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              We build specialized 3D websites for restaurants that integrate directly with your POS and delivery partners. Stop paying high commissions and start owning your customer experience.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Clock className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold">Real-time Table Booking</h4>
                  <p className="text-sm text-gray-500">Integrated reservation systems that sync with your floor management.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Star className="text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold">Review Harvesting</h4>
                  <p className="text-sm text-gray-500">Automatically pull and showcase 5-star reviews from Google, Yelp, and Facebook.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              {integrations.map((item) => (
                <div key={item.name} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                  <div className={`p-1.5 rounded ${item.color}`}>
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-tighter">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl overflow-hidden border border-white/10 relative group">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-96 glass-card p-6 transform -rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-32 bg-gray-800 rounded-xl mb-4 overflow-hidden">
                    <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center" />
                  </div>
                  <div className="h-4 w-3/4 bg-gray-700 rounded mb-2" />
                  <div className="h-3 w-1/2 bg-gray-800 rounded mb-6" />
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-gray-800 rounded" />
                    <div className="h-2 w-full bg-gray-800 rounded" />
                    <div className="h-2 w-2/3 bg-gray-800 rounded" />
                  </div>
                  <div className="mt-auto pt-8">
                    <div className="w-full h-10 bg-primary rounded-lg animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RestaurantSolutions;


import React, { useState } from 'react';

interface BookingFormProps {
  t: {
    badge: string;
    title: string;
    pickup: string;
    pickupPlaceholder: string;
    dropoff: string;
    dropoffPlaceholder: string;
    date: string;
    time: string;
    submit: string;
    success: string;
    passengers: string;
    sedan: string;
    vclass: string;
    secured: string;
    verified: string;
  };
}

const BookingForm: React.FC<BookingFormProps> = ({ t }) => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    pickup: '',
    dropoff: '',
    date: '',
    time: '',
    passengers: t.sedan
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const message = `*New Booking Request*%0A%0A*Pickup:* ${formData.pickup}%0A*Dropoff:* ${formData.dropoff}%0A*Date:* ${formData.date}%0A*Time:* ${formData.time}%0A*Passengers:* ${formData.passengers}`;
    const whatsappUrl = `https://wa.me/32478617101?text=${message}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setLoading(false);
    }, 800);
  };

  return (
    <div className="relative">
      <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#D4AF37]/5 blur-[80px] rounded-full pointer-events-none"></div>

      <form onSubmit={handleSubmit} className="relative glass-morphism p-8 lg:p-12 space-y-10 lg:space-y-12">
        <div className="flex flex-col gap-2 mb-4">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#D4AF37]">{t.badge}</span>
          <h3 className="text-3xl font-serif-display text-white">{t.title}</h3>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div className="space-y-3">
            <label className="text-[11px] font-black uppercase tracking-[0.2em] text-white/50">{t.pickup}</label>
            <div className="relative group">
              <input
                required
                name="pickup"
                value={formData.pickup}
                onChange={handleChange}
                type="text"
                placeholder={t.pickupPlaceholder}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-5 outline-none text-white focus:border-[#D4AF37] transition-all placeholder:text-white/20 font-light"
              />
              <i className="fas fa-map-pin absolute right-5 top-1/2 -translate-y-1/2 text-white/20 text-xs"></i>
            </div>
          </div>

          <div className="space-y-3">
            <label className="text-[11px] font-black uppercase tracking-[0.2em] text-white/50">{t.dropoff}</label>
            <div className="relative group">
              <input
                required
                name="dropoff"
                value={formData.dropoff}
                onChange={handleChange}
                type="text"
                placeholder={t.dropoffPlaceholder}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-5 outline-none text-white focus:border-[#D4AF37] transition-all placeholder:text-white/20 font-light"
              />
              <i className="fas fa-location-arrow absolute right-5 top-1/2 -translate-y-1/2 text-white/20 text-xs"></i>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <label className="text-[11px] font-black uppercase tracking-[0.2em] text-white/50">{t.date}</label>
            <input
              required
              name="date"
              value={formData.date}
              onChange={handleChange}
              type="date"
              className="w-full bg-white/5 border border-white/10 rounded-lg p-5 outline-none text-white font-bold uppercase text-[11px] [color-scheme:dark] focus:border-[#D4AF37]"
            />
          </div>
          <div className="space-y-3">
            <label className="text-[11px] font-black uppercase tracking-[0.2em] text-white/50">{t.time}</label>
            <input
              required
              name="time"
              value={formData.time}
              onChange={handleChange}
              type="time"
              className="w-full bg-white/5 border border-white/10 rounded-lg p-5 outline-none text-white font-bold text-[11px] [color-scheme:dark] focus:border-[#D4AF37]"
            />
          </div>
          <div className="space-y-3 relative">
            <label className="text-[11px] font-black uppercase tracking-[0.2em] text-white/50">{t.passengers}</label>
            <div className="relative">
              <select
                name="passengers"
                value={formData.passengers}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-lg p-5 outline-none text-white font-bold appearance-none text-[11px] focus:border-[#D4AF37]"
              >
                <option className="bg-[#111]" value={t.sedan}>{t.sedan}</option>
                <option className="bg-[#111]" value={t.vclass}>{t.vclass}</option>
              </select>
              <i className="fas fa-chevron-down absolute right-5 top-1/2 -translate-y-1/2 text-white/40 text-[10px] pointer-events-none"></i>
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full group relative flex items-center justify-center gap-4 bg-white text-black font-black py-7 text-[12px] uppercase tracking-[0.5em] transition-all hover:bg-[#D4AF37] disabled:opacity-50"
        >
          {loading ? (
            <i className="fas fa-spinner animate-spin"></i>
          ) : (
            <>
              <span>{t.submit}</span>
              <i className="fas fa-arrow-right transition-transform group-hover:translate-x-2"></i>
            </>
          )}
        </button>

        <div className="flex justify-center gap-10 pt-4 opacity-30">
          <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest font-black">
            <i className="fas fa-lock"></i> {t.secured}
          </div>
          <div className="flex items-center gap-2 text-[9px] uppercase tracking-widest font-black">
            <i className="fas fa-shield-alt"></i> {t.verified}
          </div>
        </div>
      </form>
    </div>
  );
};

export default BookingForm;

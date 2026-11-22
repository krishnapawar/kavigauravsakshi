import React from 'react';
import { Award, Compass, Heart, Mic, Users, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { poetData } from '../data/poetData';

export const AboutPage = ({ setCurrentPage, lang, onOpenSubscribe }) => {
  return (
    <div className="min-h-screen bg-[#080a0f] text-gray-200 pt-24 pb-20">
      
      {/* Page Header Banner - kumarvishwas.com subheader style */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-b from-[#12141e] to-[#080a0f] border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <span className="text-xs uppercase tracking-widest text-[#ed5434] font-bold block mb-2">
            Biography & Life Journey • Indore (MP)
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white font-serif mb-4">
            {lang === 'hi' ? 'Into The Life Of Kavi Gaurav Sakshi: The Poet of the People' : 'Into The Life Of Kavi Gaurav Sakshi: The Poet of the People'}
          </h1>
          <p className="text-gray-300 text-sm sm:text-base font-serif italic max-w-2xl mx-auto">
            {lang === 'hi' ? '“हिंदी साहित्य और मंच की गरिमा को नई पीढ़ी के दिलों से जोड़ने वाले हस्ताक्षर।”' : '“Connecting classical poetic grace with the pulsating emotions of the modern generation.”'}
          </p>
        </div>
      </section>

      {/* Main About Split */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
              <img
                src={poetData.images.profile}
                alt="Kavi Gaurav Sakshi"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black via-black/60 to-transparent text-white">
                <p className="font-bold text-lg font-serif">{lang === 'hi' ? poetData.name.hi : poetData.name.en}</p>
                <p className="text-xs text-gray-300">Poet, Lyricist & Stage Performer • Indore</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-serif">
              {lang === 'hi' ? 'About Kavi Gaurav Sakshi: The Poet of the People' : 'About Kavi Gaurav Sakshi: The Poet of the People'}
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              {lang === 'hi' ? poetData.about.short.hi : poetData.about.short.en}
            </p>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              {lang === 'hi' ? poetData.about.full.hi : poetData.about.full.en}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              {poetData.about.stats.map((st, i) => (
                <div key={i} className="bg-[#10131d] p-4 rounded-xl border border-gray-800 text-center">
                  <span className="text-2xl font-black text-[#ed5434] block">{st.count}</span>
                  <span className="text-[11px] text-gray-400 mt-1 block">{lang === 'hi' ? st.labelHi : st.labelEn}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Journey of a Poet */}
        <div className="mb-20 bg-[#0e1017] p-8 sm:p-12 rounded-2xl border border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-6 font-serif">
            Journey of a Poet (काव्य यात्रा)
          </h3>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
            सांस्कृतिक और साहित्यिक धरा इंदौर (मध्य प्रदेश) से ताल्लुक रखने वाले गौरव साक्षी को आरंभिक जीवन से ही शब्दों की लय, मानवीय संवेदनाओं और हिंदी भाषा के सौंदर्य से गहरा लगाव रहा। मालवा की पावन माटी और साहित्यिक परिवेश में रची-बसी उनकी कलम ने बहुत कम उम्र में ही राष्ट्रीय काव्य मंचों पर विशिष्ट पहचान बना ली।
          </p>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            साहित्य तक (Sahitya Tak) पर उनके द्वारा प्रस्तुत प्रेम और विरह के गीतों ने डिजिटल जगत में तहलका मचाया और उन्हें देश के कोने-कोने में पहुंचा दिया। आज वे देश के शीर्ष अखिल भारतीय कवि सम्मेलनों में एक अत्यंत सम्मानित और बहुप्रतीक्षित नाम हैं।
          </p>
        </div>

        {/* Key Milestones */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 font-serif text-center">
            Key Milestones in Gaurav Sakshi’s Journey
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {poetData.about.milestones.map((m, idx) => (
              <div key={idx} className="bg-[#11131c] p-6 rounded-xl border border-gray-800 flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-black text-[#ed5434] font-mono block mb-2">{m.year}</span>
                  <h4 className="text-base font-bold text-white mb-2">{lang === 'hi' ? m.titleHi : m.titleEn}</h4>
                  <p className="text-xs text-gray-400 leading-relaxed">{lang === 'hi' ? m.descHi : m.descEn}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Motivational Speaker & Youth Icon */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-[#10121a] p-8 rounded-xl border border-gray-800">
            <h4 className="text-xl font-bold text-white mb-3 font-serif flex items-center space-x-2">
              <Users className="w-5 h-5 text-[#ed5434]" />
              <span>Motivational Speaker</span>
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              केवल कविताओं तक सीमित न रहकर, गौरव साक्षी युवाओं के साथ संवाद स्थापित करते हैं। उनके ओजस्वी विचार और जीवन के प्रति व्यावहारिक दृष्टिकोण विद्यार्थियों और युवा पेशेवरों में नई ऊर्जा और सकारात्मकता का संचार करते हैं।
            </p>
          </div>

          <div className="bg-[#10121a] p-8 rounded-xl border border-gray-800">
            <h4 className="text-xl font-bold text-white mb-3 font-serif flex items-center space-x-2">
              <Award className="w-5 h-5 text-[#ed5434]" />
              <span>Cultural & Youth Icon</span>
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              आईआईटी, आईआईएम और देश के प्रमुख विश्वविद्यालयों में उनके व्याख्यान और काव्य सत्र हमेशा खचाखच भरे सभागारों में होते हैं। वे आज की पीढ़ी को भारतीय भाषा और सांस्कृतिक विरासत से गर्व के साथ जोड़ते हैं।
            </p>
          </div>
        </div>

        {/* Sub-CTA Banner (Kumar Vishwas Style) */}
        <div className="rounded-2xl bg-gradient-to-r from-[#171a26] via-[#221c17] to-[#171a26] p-8 sm:p-10 border border-gray-800 text-center">
          <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 font-serif">
            Stay Updated on India & International Tours! Sign Up Now!
          </h4>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mx-auto mb-6">
            Join the official literary circle for early ticket announcements and new composition alerts.
          </p>
          <button
            onClick={onOpenSubscribe}
            className="px-8 py-3 rounded-full bg-[#ed5434] hover:bg-[#d94424] text-white font-bold text-xs uppercase tracking-wider"
          >
            Subscribe Now
          </button>
        </div>

      </section>

    </div>
  );
};

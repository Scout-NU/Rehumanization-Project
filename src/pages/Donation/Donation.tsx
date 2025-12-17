import { useState } from "react";

interface ToggleSwitchProps {
  selected: 'once' | 'monthly';
  onSelect: (value: 'once' | 'monthly') => void;
  iconLeft?: string;
  iconRight?: string;
}

interface PriceSelectorProps {
  options?: string[];
  valueIndex?: number;
  onChange?: (index: number) => void;
}

interface DonationSegmentProps {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
}

interface CustomAmountInputProps {
  value?: string;
  onChange?: (value: string) => void;
}

interface DetailLine {
  icon: string | null;
  number: string;
  text: string;
  rightText: string;
}

interface DonationSummaryProps {
  selected?: 'once' | 'monthly';
  amount?: string;
  priceIndex?: number;
  priceOptions?: number[];
  detailLines?: DetailLine[];
}

interface DonationCalculatorProps {
  title?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  iconLeft?: string;
  iconRight?: string;
  onToggle?: (value: 'once' | 'monthly') => void;
}

const ToggleSwitch = ({ selected, onSelect, iconLeft, iconRight }: ToggleSwitchProps) => {
  const insetPx = 4;
  const highlightLeft = selected === 'once' ? `${insetPx}px` : `calc(50% + ${insetPx}px)`;
  const highlightWidth = `calc(50% - ${insetPx * 2}px)`;

  return (
    <div className="mt-4 flex justify-center">
      <div
        className="w-[556px] h-[47px] rounded-lg relative bg-[#07153C] select-none"
        role="tablist"
        aria-label="Donation frequency"
        style={{ padding: `${insetPx}px` }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: insetPx + 'px',
            bottom: insetPx + 'px',
            left: highlightLeft,
            width: highlightWidth,
            backgroundColor: '#0A2572',
            borderRadius: 9999,
            transition: 'left 180ms ease',
            pointerEvents: 'none',
          }}
        />

        <button
          type="button"
          onClick={() => onSelect('once')}
          className="absolute left-0 top-0 h-full w-1/2 bg-transparent rounded-l-lg flex items-center justify-center cursor-pointer"
          style={{ background: 'transparent' }}
        >
          <div className="flex items-center gap-2 z-10 pointer-events-none">
            {iconLeft && <img src={iconLeft} alt="" className="w-[10px] h-[9px]" />}
            <span className="text-white text-[14px]">Give once</span>
          </div>
        </button>

        <button
          type="button"
          onClick={() => onSelect('monthly')}
          className="absolute right-0 top-0 h-full w-1/2 bg-transparent rounded-r-lg flex items-center justify-center cursor-pointer"
          style={{ background: 'transparent' }}
        >
          <div className="flex items-center gap-2 z-10 pointer-events-none">
            {iconRight && <img src={iconRight} alt="" className="w-[10px] h-[9px]" />}
            <span className="text-white text-[14px]">Monthly</span>
          </div>
        </button>
      </div>
    </div>
  );
};


const PriceSelector = ({ options = [], valueIndex = 0, onChange }: PriceSelectorProps) => {
  const insetPx = 4;
  const selectedIndex = typeof valueIndex === 'number' ? valueIndex : 0;
  const highlightLeft = `calc(${selectedIndex * (100 / options.length)}% + ${insetPx}px)`;
  const highlightWidth = `calc(${100 / options.length}% - ${insetPx * 2}px)`;

  return (
    <div className="mt-4 flex justify-center">
      <div
        className="w-[556px] h-[47px] rounded-lg relative bg-[#07153C] select-none"
        style={{ padding: `${insetPx}px` }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: insetPx + 'px',
            bottom: insetPx + 'px',
            left: highlightLeft,
            width: highlightWidth,
            backgroundColor: '#0A2572',
            borderRadius: 9999,
            transition: 'left 180ms ease',
            pointerEvents: 'none',
          }}
        />

        {options.map((opt, i) => (
          <button
            key={opt + i}
            type="button"
            onClick={() => onChange && onChange(i)}
            className="absolute top-0 h-full bg-transparent flex items-center justify-center cursor-pointer"
            style={{
              left: `${(i * 100) / options.length}%`,
              width: `${100 / options.length}%`,
            }}
          >
            <span className="text-white text-[14px] z-10">{opt}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const DonationSegment = ({ icon, title, description, buttonText, onButtonClick }: DonationSegmentProps) => {
    return (
        <div className="bg-transparent rounded-lg shadow-lg p-4 flex flex-col items-start text-left mb-20">
            <img src={icon} alt={title} className="w-16 h-16 mb-2 self-start" />
            <h2 className="font-bold text-white text-[36px]">{title}</h2>
            <p className="text-white mt-2">{description}</p>
            <button 
                onClick={onButtonClick} 
                className="mt-4 text-white py-2 px-6 rounded-full self-start inline-flex items-center justify-center"
                style={{
                    backgroundColor: 'rgba(255,255,255,0.2)',
                    boxShadow: '0 0 20px -5px rgba(0,0,0,0.25)'
                }}
            >
                {buttonText}
            </button>
        </div>
    );
};


const CustomAmountInput = ({ value = '', onChange }: CustomAmountInputProps) => {
  const sanitize = (v: string): string => {
    v = String(v || '');
    v = v.replace(/[^\d.]/g, '');
    const parts = v.split('.');
    if (parts.length > 2) v = parts[0] + '.' + parts.slice(1).join('');
    const [whole = '', frac = ''] = v.split('.');
    const frac2 = frac.slice(0, 2);
    return frac !== '' ? `${whole}.${frac2}` : whole;
  };

  const formatTwoDecimals = (v: string): string => {
    if (v === '' || v === '.') return '';
    if (v.includes('.')) {
      const [w, f = ''] = v.split('.');
      const padded = (f + '00').slice(0, 2);
      return `${w === '' ? '0' : w}.${padded}`;
    }
    return `${v === '' ? '0' : v}.00`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    const cleaned = sanitize(raw);
    onChange && onChange(cleaned);
  };

  const handleBlur = () => {
    const formatted = formatTwoDecimals(value || '');
    onChange && onChange(formatted);
  };

  return (
    <div className="mt-4 flex justify-center">
      <div className="w-[556px]">
        <div
          className="rounded-lg flex items-center"
          style={{
            background: '#040E2E',
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1))',
            border: '1px solid rgba(255,255,255,0.12)',
            paddingLeft: '12px',
            paddingRight: '12px',
            height: '62px',
          }}
        >
          <span className="text-gray-300 select-none" style={{ marginRight: 12 }}>$</span>

          <input
            inputMode="decimal"
            pattern="^\d+(\.\d{0,2})?$"
            value={value ?? ''}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="0.00"
            className="flex-1 bg-transparent outline-none text-white"
            style={{ caretColor: '#FFFFFF', fontSize: '32px', lineHeight: '1' }}
            aria-label="Custom donation amount"
            type="text"
          />

          <span className="text-gray-300 select-none" style={{ marginLeft: 12 }}>USD</span>
        </div>
      </div>
    </div>
  );
};

const DonationSummary = ({ selected = 'once', amount = '', priceIndex = 0, priceOptions = [], detailLines = [] }: DonationSummaryProps) => {
  const amt = parseFloat(String(amount).replace(/[^0-9.]/g, '')) || (priceOptions[priceIndex] ?? 0);
  const formatted = (n: number): string => (isNaN(n) ? '0.00' : n.toFixed(2));
  const yearly = amt * 12;

  return (
    <div className="mt-6 w-full">
      <div
        className="w-full rounded-lg p-5 text-left"
        style={{
          background: '#07153C',
        }}
      >
        {selected === 'once' ? (
          <div>
            <p className="text-white text-[16px] mb-3 text-left">
              Your one-time donation of <span className="font-semibold">${formatted(amt)}</span> will support our growth as an organization and contribute to a fund that provides homeless people with goods that are essential to their livelihood.
            </p>
          </div>
        ) : (
          <div>
            <p className="text-white text-[16px] mb-3 text-left">
              Your donation of <span className="font-semibold">${formatted(yearly)}</span>/year can provide
            </p>

            <div className="mt-3 flex flex-col gap-3 text-left">
              {detailLines.length > 0 ? (
                detailLines.map((line, idx) => (
                  <div key={idx} className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                       {line.icon ? (
                         <img src={line.icon} alt="" className="w-[24px] h-[24px] object-cover" />
                       ) : (
                         <svg className="w-[24px] h-[24px] flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <rect width="24" height="24" rx="6" fill="#0A2572" />
                         </svg>
                       )}

                      <div className="flex items-baseline gap-2">
                        <div className="text-white font-semibold text-[16px]">{line.number}</div>
                        <div className="text-white text-[16px] opacity-90">{line.text}</div>
                      </div>
                     </div>

                     <div className="text-white text-[13px] opacity-70">
                       {line.rightText}
                     </div>
                   </div>
                 ))
               ) : (
                 <>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                       <svg className="w-[24px] h-[24px] flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <rect width="24" height="24" rx="6" fill="#0A2572" />
                       </svg>
                      <div className="flex items-baseline gap-2">
                        <div className="text-white font-semibold text-[16px]">1</div>
                        <div className="text-white text-[16px]">Meals provided</div>
                      </div>
                     </div>
                     <div className="text-white text-[13px] opacity-70">$15/meal</div>
                   </div>

                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-3">
                       <svg className="w-[24px] h-[24px] flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <rect width="24" height="24" rx="6" fill="#0A2572" />
                       </svg>
                      <div className="flex items-baseline gap-2">
                        <div className="text-white font-semibold text-[16px]">2</div>
                        <div className="text-white text-[16px]">Care kits</div>
                      </div>
                     </div>
                     <div className="text-white text-[13px] opacity-70">$25/kit</div>
                   </div>
                 </>
               )}
             </div>
           </div>
         )}
       </div>
     </div>
   );
 };

const DonationCalculator = ({ title, children, footer, iconLeft, iconRight, onToggle }: DonationCalculatorProps) => {
  const [selected, setSelected] = useState<'once' | 'monthly'>('once');
  const [priceIndex, setPriceIndex] = useState<number>(0);
  const [customAmount, setCustomAmount] = useState<string>('');

  const handleSelect = (value: 'once' | 'monthly') => {
    setSelected(value);
    if (typeof onToggle === 'function') onToggle(value);
  };

  const priceOptions = [10, 25, 50, 100];

  const detailLines: DetailLine[] = [
    { icon: null, number: '40', text: 'meals', rightText: '$15/meal' },
    { icon: null, number: '30', text: 'tents', rightText: '$20/tent' },
    { icon: null, number: '24', text: 'sets of clothing', rightText: '$20/outfit' }
  ];

  return (
    <div
      className="bg-[#040E2E] text-white rounded-2xl w-[596px] h-auto max-h-[620px] p-6 shadow-lg overflow-auto"
      style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.12)', fontFamily: 'Figtree, sans-serif' }}
    >
      <div className="flex items-start gap-4">
        <div className="flex-1">
          {title && <h3 className="font-semibold mb-2" style={{ fontSize: '20px' }}>{title}</h3>}
          <div className="text-[18px] leading-relaxed">
            {children}
          </div>
        </div>
      </div>

      <ToggleSwitch selected={selected} onSelect={handleSelect} iconLeft={iconLeft} iconRight={iconRight} />

      <PriceSelector
        options={priceOptions.map((p) => `$${p}`)}
        valueIndex={priceIndex}
        onChange={(i: number) => {
          setPriceIndex(i);
          setCustomAmount(priceOptions[i].toFixed(2));
        }}
      />

      <CustomAmountInput value={customAmount} onChange={setCustomAmount} />

      <DonationSummary
        selected={selected}
        amount={customAmount}
        priceIndex={priceIndex}
        priceOptions={priceOptions}
        detailLines={detailLines}
      />

      {selected === 'monthly' && (
        <p className="mt-4 text-left" style={{ fontSize: '12px', fontStyle: 'italic', color: '#B4B4B4' }}>
          These figures are hypothetical estimations based on the current cost of each good.
        </p>
      )}

      {footer && <div className="mt-6">{footer}</div>}
    </div>
  );
};

const Donation = () => {
    const handleButtonClick = () => {
        alert('Button clicked!');
    };

    const handleToggle = (value: 'once' | 'monthly') => {
      console.log('donation frequency selected:', value);
    };

    return (
        <div className="w-screen min-h-screen bg-[#060A1F] flex flex-col items-center">
            <div className="relative w-full h-[520px] flex flex-col justify-center items-start">
                <img
                    src="/donation.jpg"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div 
                    className="absolute inset-0" 
                    style={{ background: 'linear-gradient(to bottom, rgba(6, 10, 31, 0.6), rgba(6, 10, 31, 0.4))' }} 
                />
                <div className="relative z-10 text-left text-[#CED3E3] px-24" style={{ width: '50%' }}>
                     <p className="text-[20px] mb-5">GET INVOLVED</p>
                     <h1 className="font-semibold text-[42px]">Donation Guide</h1>
                     <p className="mt-5 text-[24px]">Donating money, goods, and providing people with items they ask for can greatly support our mission of providing wraparound care...</p>
                </div>
            </div>
            <div className="flex flex-wrap justify-start mt-10 px-20 w-full">
                <div className="w-1/2 p-4">
                    <DonationSegment
                        icon="present.png"
                        title="Donate Funds"
                        description="Make a secure one-time or monthly donation to support our mission. Funds go directly to supporting homeless people."
                        buttonText="Make a Secure Donation"
                        onButtonClick={handleButtonClick}
                    />
                    <DonationSegment
                        icon="tent.png"
                        title="Donate Goods"
                        description="We also accept donations of items like clothing, tech, sleeping bags, and more. If you'd like to donate goods, please reach out to us."
                        buttonText="Contact Us"
                        onButtonClick={handleButtonClick}
                    />
                    <DonationSegment 
                        icon="amazon-logo.png"
                        title="Amazon Wishlist"
                        description="View our amazon wishlist to see what clients are asking for right now."
                        buttonText="View Amazon Wishlist"
                        onButtonClick={handleButtonClick}
                    />
                </div>
                <div className="w-1/2 flex justify-start items-start">
                    <DonationCalculator
                        title="Donation Calculator"
                        onToggle={handleToggle}
                        iconRight="/tiny-heart.svg"
                        footer={
                        <button
                            onClick={handleButtonClick}
                            className="w-full bg-[#DD522D] text-white py-2 px-6 rounded-full">
                            Open donation portal
                        </button>
                        }>
                        <p>See how your donation supports our mission</p>
                    </DonationCalculator>
                </div>
            </div>
            <div className="w-full bg-[#DD522D] mt-20 px-10 py-20">
                <div className="px-10">
                <div className="bg-white rounded-lg flex flex-row items-center" style={{
                    background: 'linear-gradient(to right, #DDEBF6, #CEE1F2)',
                    boxShadow: '0 0 20px rgba(0,0,0,0.1)'
                }}>
                    <div className="w-1/2 flex flex-col items-start justify-center p-8">
                        <div className="w-3/5 flex flex-col text-left">
                            <h2 className="text-5xl font-medium mb-4" style={{ color: '#060A1F', fontSize: '20px' }}>Volunteer with us to continue making an impact</h2>
                            <button 
                                onClick={handleButtonClick}
                                className="text-white py-2 px-6 rounded-full self-start"
                                style={{
                                    backgroundColor: '#DD522D'
                                }}
                            >
                                See Volunteer Opportunities
                            </button>
                        </div>
                    </div>
                    <div className="w-1/2 h-full">
                        <img 
                            src="hands-holding.jpg" 
                            alt="Section Image"
                            className="w-full h-full object-cover rounded-r-lg"
                        />
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Donation;
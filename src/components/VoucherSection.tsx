import voucherphoto from '../assets/voucherp.png';

export function VoucherSection() {
  return (
    <div className="max-w-3xl mx-auto p-4 bg-background my-16">
      <div className="flex items-start gap-6">
        {/* Left side - Form */}
        <div className="flex-1 space-y-5">
          {/* Step indicator */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full border-2 border-primary flex items-center justify-center text-xs font-medium">
              !
            </div>
            <h2 className="text-xl font-bold tracking-tight">
              ZREALIZUJ <span className="font-normal">VOUCHER</span>
            </h2>
          </div>

          {/* Form fields */}
          <div className="space-y-3">
            <div className="space-y-1">
              <label htmlFor="nickname" className="text-sm font-medium text-muted-foreground">
                WPISZ SWÓJ NICK
              </label>
              <input
                id="nickname"
                type="text"
                className="w-full border-b-2 border-t-0 border-l-0 border-r-0 rounded-none bg-transparent px-0 py-2 focus-visible:ring-0 focus-visible:border-primary"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="code" className="text-sm font-medium text-muted-foreground">
                WPISZ KOD
              </label>
              <input
                id="code"
                type="text"
                className="w-full border-b-2 border-t-0 border-l-0 border-r-0 rounded-none bg-transparent px-0 py-2 focus-visible:ring-0 focus-visible:border-primary"
              />
            </div>
          </div>

          {/* Submit button */}
          <div className="pt-2">
            <button 
              className="bg-black hover:bg-black/90 text-white px-6 py-2 rounded-none font-medium"
              type="submit"
            >
              ZREALIZUJ
            </button>
          </div>
        </div>

        {/* Right side - Voucher image */}
        <div className="flex-shrink-0 self-start -mt-4 ml-10">
          <img
            src={voucherphoto}
            alt="Voucher grafika"
            className="w-60 h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { QRCodeSVG } from "qrcode.react";

const QRCode = () => {
  // QR code URL - dynamically generates full URL to menu page
  const menuUrl = React.useMemo(() => {
    if (typeof window !== "undefined") {
      return `${window.location.origin}/menu`;
    }
    return "/menu";
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white print:bg-white">
      {/* Print Button - Hidden when printing */}
      <div className="print:hidden bg-gradient-to-r from-gray-800 to-gray-900 text-white py-4 px-6 shadow-lg">
        <div className="max-w-4xl mx-auto flex justify-between items-center flex-wrap gap-4">
          <h1 className="text-xl font-bold">QR Code Menu</h1>
          <button
            onClick={handlePrint}
            className="bg-white text-gray-900 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-md"
          >
            Print / Save as PDF
          </button>
        </div>
      </div>

      {/* Main Content - Optimized for Print/PDF */}
      <div className="max-w-4xl mx-auto px-6 py-12 print:py-8">
        {/* Header Section */}
        <div className="text-center mb-12 print:mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 print:text-4xl">
            Scan to View Menu
          </h1>
          <p className="text-xl text-gray-600 print:text-lg">
            Point your camera at the QR code to access our digital menu
          </p>
        </div>

        {/* QR Code Container */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 print:gap-8 mb-12 print:mb-8">
          {/* QR Code */}
          <div className="bg-white p-8 print:p-6 rounded-3xl shadow-2xl print:shadow-none border-4 border-gray-900 print:border-2">
            <QRCodeSVG
              value={menuUrl}
              size={300}
              level="H"
              includeMargin={true}
              className="w-full h-auto"
            />
          </div>

          {/* Instructions */}
          <div className="space-y-6 print:space-y-4 max-w-md">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-900 print:text-xl">
                How to Scan:
              </h2>
              <div className="space-y-3 print:space-y-2">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold print:w-6 print:h-6 print:text-sm">
                    1
                  </div>
                  <p className="text-gray-700 text-lg print:text-base pt-1">
                    Open your phone's camera app
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold print:w-6 print:h-6 print:text-sm">
                    2
                  </div>
                  <p className="text-gray-700 text-lg print:text-base pt-1">
                    Point it at the QR code above
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold print:w-6 print:h-6 print:text-sm">
                    3
                  </div>
                  <p className="text-gray-700 text-lg print:text-base pt-1">
                    Tap the notification to view our menu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Restaurant Info Section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 print:p-6 print:bg-gray-50 print:rounded-lg mb-8 print:mb-6">
          <div className="text-center space-y-4 print:space-y-2">
            <h2 className="text-3xl font-bold text-gray-900 print:text-2xl">
              Restaurant Name
            </h2>
            <p className="text-xl text-gray-600 print:text-lg">
              Your Restaurant Tagline Here
            </p>
            <div className="flex justify-center space-x-6 print:space-x-4 pt-4 print:pt-2">
              <div className="text-center">
                <p className="text-sm text-gray-500 print:text-xs">Address</p>
                <p className="text-gray-900 font-semibold print:text-sm">
                  123 Restaurant St
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm text-gray-500 print:text-xs">Phone</p>
                <p className="text-gray-900 font-semibold print:text-sm">
                  (555) 123-4567
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-gray-500 text-sm print:text-xs">
          <p>This QR code will take you to our digital menu</p>
          <p className="mt-1">No app download required • Works on all devices</p>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          @page {
            margin: 1cm;
            size: A4;
          }
          
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          
          .print\\:hidden {
            display: none !important;
          }
          
          .print\\:bg-white {
            background: white !important;
          }
          
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          
          .print\\:border-2 {
            border-width: 2px !important;
          }
          
          .print\\:py-8 {
            padding-top: 2rem !important;
            padding-bottom: 2rem !important;
          }
          
          .print\\:mb-8 {
            margin-bottom: 2rem !important;
          }
          
          .print\\:mb-6 {
            margin-bottom: 1.5rem !important;
          }
          
          .print\\:p-6 {
            padding: 1.5rem !important;
          }
          
          .print\\:gap-8 {
            gap: 2rem !important;
          }
          
          .print\\:space-y-4 {
            --tw-space-y-reverse: 0;
            margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse))) !important;
            margin-bottom: calc(1rem * var(--tw-space-y-reverse)) !important;
          }
          
          .print\\:space-y-2 {
            --tw-space-y-reverse: 0;
            margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse))) !important;
            margin-bottom: calc(0.5rem * var(--tw-space-y-reverse)) !important;
          }
          
          .print\\:text-4xl {
            font-size: 2.25rem !important;
            line-height: 2.5rem !important;
          }
          
          .print\\:text-2xl {
            font-size: 1.5rem !important;
            line-height: 2rem !important;
          }
          
          .print\\:text-xl {
            font-size: 1.25rem !important;
            line-height: 1.75rem !important;
          }
          
          .print\\:text-lg {
            font-size: 1.125rem !important;
            line-height: 1.75rem !important;
          }
          
          .print\\:text-base {
            font-size: 1rem !important;
            line-height: 1.5rem !important;
          }
          
          .print\\:text-sm {
            font-size: 0.875rem !important;
            line-height: 1.25rem !important;
          }
          
          .print\\:text-xs {
            font-size: 0.75rem !important;
            line-height: 1rem !important;
          }
          
          .print\\:rounded-lg {
            border-radius: 0.5rem !important;
          }
          
          .print\\:bg-gray-50 {
            background-color: #f9fafb !important;
          }
          
          .print\\:pt-2 {
            padding-top: 0.5rem !important;
          }
          
          .print\\:space-x-4 {
            --tw-space-x-reverse: 0;
            margin-right: calc(1rem * var(--tw-space-x-reverse)) !important;
            margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse))) !important;
          }
          
          .print\\:w-6 {
            width: 1.5rem !important;
          }
          
          .print\\:h-6 {
            height: 1.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default QRCode;


import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title : "Bumi Payangan - Hasil Bumi Segar dari Tabanan, Bali",
  description : "Bumi Payangan menjual hasil bumi segar dan produk olahan langsung dari Desa Payangan, Tabanan, Bali. Jambu kristal, pepaya, kelapa muda, dan bunga segar dari petani lokal.",
  keywords : "hasil bumi Bali, jambu kristal, pepaya, kelapa muda, bunga gemitir, bunga pacah, petani lokal Tabanan, hasil pertanian organik,  produk segar Bali, buah segar, bunga segar, komunitas petani Payangan, payangan, payangan bali, desa payangan, buah, bunga, bunga upacara, bunga bali, kelapa cap, kelapa bali, kelapa muda grosir, jambu kristal bali, jambu kristal payangan, jambu payangan, jambu bali, jambu organik, bunga gemitir bali, bunga pacah bali",
  openGraph: {
    title: "Bumi Payangan - Hasil Bumi Segar dari Tabanan, Bali",
    description: "Bumi Payangan menjual hasil bumi segar dan produk olahan langsung dari Desa Payangan, Tabanan, Bali. Jambu kristal, pepaya, kelapa muda, dan bunga segar dari petani lokal.",
    images: ["/images/herofix.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${poppins.variable}`}>
      <body className={`${inter.className} font-poppins`}>{children}</body>
    </html>
  );
}


import Footer from "@/components/footer/footer";

export default function FrontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="flex flex-row justify-between items-center mx-auto px-1 w-full">    
    {children}
  </main>
}
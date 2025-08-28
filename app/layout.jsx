import '@/app/ui/global.css';

export const metadata = {
  title: {
    template : '%s | Acme Dashboard',
    default : 'Acme Dashboard',
  },
  description: 'The official Next.js Course Dashboard, built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

const RootLayout = ({children}) => {
  return (
    <>
      <html lang="en">
        <body>{children}</body>
      </html>
    </>
  );
}
export default RootLayout;
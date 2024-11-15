import Footer from "@/components/Footer";

export const metadata = {
	title: "Akash | About",
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}

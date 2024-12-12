export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav>{/*ここにナビゲーションメニュー*/}</nav>
      <main>{children}</main>
    </div>
  );
}

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <small>© {new Date().getFullYear()} Your Name — Built with ♥</small>
        <nav className="social">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </nav>
      </div>
    </footer>
  )
}

import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Platform',
      links: [
        { name: 'Browse Courses', path: '/courses' },
        { name: 'For Enterprise', path: '/enterprise' },
        { name: 'For Government', path: '/government' },
        { name: 'Become an Instructor', path: '/teach' },
        { name: 'Mobile App', path: '/mobile' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Help Center', path: '/help' },
        { name: 'Blog', path: '/blog' },
        { name: 'Tech Blog', path: '/tech-blog' },
        { name: 'Success Stories', path: '/stories' },
        { name: 'Career Resources', path: '/careers' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', path: '/about' },
        { name: 'Careers', path: '/jobs' },
        { name: 'Press', path: '/press' },
        { name: 'Leadership', path: '/leadership' },
        { name: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Popular Subjects',
      links: [
        { name: 'Data Science', path: '/courses?category=Tech' },
        { name: 'Business', path: '/courses?category=Business' },
        { name: 'Artificial Intelligence', path: '/courses?category=AI' },
        { name: 'Design', path: '/courses?category=Design' },
        { name: 'Personal Development', path: '/courses?category=Personal Growth' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: 'https://facebook.com' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com' },
    { name: 'Instagram', icon: Instagram, url: 'https://instagram.com' },
    { name: 'YouTube', icon: Youtube, url: 'https://youtube.com' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-light to-primary-dark rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-2xl font-bold text-white">CourseHub</span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              Empowering learners worldwide with quality education and professional development opportunities.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-primary-light flex-shrink-0" />
                <span>123 Learning Street, Education City, ED 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary-light flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary-light flex-shrink-0" />
                <span>support@coursehub.com</span>
              </div>
            </div>
          </div>

          {/* Footer Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm hover:text-primary-light transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="text-white font-semibold mb-2">Stay Updated</h3>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter for the latest courses and updates.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-light focus:border-transparent"
              />
              <button className="px-6 py-2 bg-primary-light hover:bg-primary-dark text-white font-semibold rounded-lg transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links & Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-light transition-colors group"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>

            {/* Copyright & Legal Links */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-400">
              <span>© {currentYear} CourseHub. All rights reserved.</span>
              <div className="flex items-center gap-4">
                <Link to="/privacy" className="hover:text-primary-light transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="hover:text-primary-light transition-colors">
                  Terms of Service
                </Link>
                <Link to="/cookies" className="hover:text-primary-light transition-colors">
                  Cookie Policy
                </Link>
                <Link to="/accessibility" className="hover:text-primary-light transition-colors">
                  Accessibility
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Language & Currency Selector */}
        <div className="border-t border-gray-800 pt-6 mt-6">
          <div className="flex flex-wrap gap-4 text-sm">
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <span>🌐</span>
              <span>English</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
              <span>💲</span>
              <span>USD</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import { FaGithub, FaTwitter, FaGlobe, FaHeart, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', url: '/docs' },
        { name: 'API Status', url: '/status' },
        { name: 'Tutorials', url: '/tutorials' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', url: '/privacy' },
        { name: 'Terms of Service', url: '/terms' },
        { name: 'Data Sources', url: '/sources' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', url: '/about' },
        { name: 'Blog', url: '/blog' },
        { name: 'Contact', url: '/contact' },
      ],
    },
  ];

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/vidura-12' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/vidura-nirmal-681848271/' },
    { icon: <FaGlobe />, url: '#' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                Countries <span className="text-blue-400">API</span>
              </h3>
              <p className="text-gray-400 mb-6">
                The most comprehensive REST API for country data. Get information about countries, 
                regions, cities, and more with simple HTTP requests.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors text-xl"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {footerLinks.map((column, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-sm font-semibold text-gray-200 uppercase tracking-wider">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.url}
                      className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                      whileHover={{ x: 5 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center text-sm text-gray-500 mb-4 md:mb-0"
          >
            <span>© {currentYear} Countries API. All rights reserved.</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center text-sm text-gray-500"
          >
            <span>Made with</span>
            <FaHeart className="mx-1 text-red-500" />
            <span>by</span>
            <a
              href="https://www.linkedin.com/in/vidura-nirmal-681848271/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 text-blue-400 hover:underline"
            >
              Vidura Nirmal
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-4 text-xs text-gray-600 text-center"
        >
          <p>
            Data sourced from REST Countries, GeoNames, and other open data providers.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
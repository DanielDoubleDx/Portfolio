import React from 'react'
import { FaGithub, FaFacebook, FaInstagram, FaDiscord } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub className="w-6 h-6" />,
      url: 'https://github.com/DanielDoubleDx',
    },
    {
      name: 'Facebook',
      icon: <FaFacebook className="w-6 h-6" />,
      url: 'https://www.facebook.com/thanhduong3107',
    },
    {
      name: 'Instagram',
      icon: <FaInstagram className="w-6 h-6" />,
      url: 'https://www.instagram.com/cong_thanhh_/',
    },
    {
      name: 'Discord',
      icon: <FaDiscord className="w-6 h-6" />,
      url: 'https://discordapp.com/users/555312555300487169',
    },
  ]

  return (
    <footer className="bg-primary py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <div className="flex space-x-4 mb-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:scale-110 transition-transform duration-300"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-text-primary text-sm">
            © {new Date().getFullYear()} Thanh Duong Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
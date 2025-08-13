import { Github, Twitter, Linkedin, Mail, Zap } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="relative z-10 px-6 py-20 border-t border-orange-800/30 bg-black">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 to-yellow-900/5"></div>
      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-600 via-yellow-600 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/25">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                COREbuilder AI
              </span>
            </div>
            <p className="text-neutral-300 leading-relaxed mb-6 max-w-md">
              The future of Core development is here. Build, deploy, and scale smart contracts with our revolutionary AI-powered IDE and comprehensive tooling.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <div className="space-y-3">
              {[
                { name: 'IDE', href: '/ide' },
                { name: 'Contracts', href: '#' },
                { name: 'Analytics', href: '#' },
                { name: 'API', href: '#' }
              ].map((item) => (
                <Link key={item.name} href={item.href} className="block text-neutral-300 hover:text-orange-400 transition-colors duration-300">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Resources</h4>
            <div className="space-y-3">
              {['Documentation', 'Tutorials', 'Blog', 'Support'].map((item) => (
                <a key={item} href="#" className="block text-neutral-300 hover:text-orange-400 transition-colors duration-300">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-orange-800/30 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">
            © 2024 COREbuilder AI. All rights reserved. Built for the future of Core development.
          </p>
          <div className="flex space-x-6 text-sm">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a key={item} href="#" className="text-neutral-400 hover:text-orange-400 transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
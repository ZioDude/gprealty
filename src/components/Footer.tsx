import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border"> {/* Themed background and border */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <img src="/g.prealty-logo.png" alt="G.PRealty Logo" className="h-8 w-auto mb-4" /> {/* Added logo image */}
            <h3 className="text-xl font-bold mb-2 text-foreground">StudentHousing Cyprus</h3> {/* Reduced mb from 4 to 2 */}
            <p className="text-muted-foreground mb-4">
              Making student life in Cyprus more comfortable and affordable through quality housing solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors"> {/* Themed social links */}
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Find Housing
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  List Your Property
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: info@studenthousingcyprus.com</li>
              <li>Phone: +357 22 123456</li>
              <li>Address: Nicosia, Cyprus</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-foreground">Newsletter</h3>
            <p className="text-muted-foreground mb-4">
              Subscribe to our newsletter for updates and housing opportunities.
            </p>
            <form className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                // className="px-4 py-2 rounded-md bg-input text-foreground border-border focus:outline-none focus:ring-1 focus:ring-ring" // Shadcn Input has its own styling
              />
              <Button
                type="submit"
                variant="default"
                // className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors" // Shadcn Button has its own styling
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground"> {/* Themed border and text */}
          <p>&copy; {new Date().getFullYear()} StudentHousing Cyprus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

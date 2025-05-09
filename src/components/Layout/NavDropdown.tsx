import { useState } from 'react';
import { Link } from 'react-router-dom';

interface NavDropdownItem {
  id: string;
  title: string;
  path: string;
}

interface NavDropdownProps {
  items: NavDropdownItem[];
}

const NavDropdown: React.FC<NavDropdownProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="dropdown group-hover:block hidden"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="py-2">
        {items.map((item) => (
          <Link
            key={item.id}
            to={item.path}
            className="block px-4 py-2 text-sm text-dark-800 hover:bg-primary-50 hover:text-primary-600"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavDropdown;
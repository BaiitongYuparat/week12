import { Link, useLocation } from "react-router-dom";
import { Flex, Button, Box } from "@radix-ui/themes";
import { IoHome } from "react-icons/io5";
import { FaFolderOpen } from "react-icons/fa";

function Navigation() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <Box className="border-b border-pink-200 bg-pink-50/80 backdrop-blur-sm shadow-[0_2px_12px_rgba(255,182,193,0.3)]">
      <Flex gap="4" p="4" justify="center" wrap="wrap">
        <Link to="/" className="no-underline">
          <Button
            size="3"
            variant="solid"
            className={`rounded-full font-medium transition-all duration-300 ${
              isActive("/")
                ? "bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-[0_0_12px_rgba(255,182,193,0.6)]"
                : "bg-white text-pink-600 border border-pink-200 hover:bg-pink-100 "
            }`}
          >
            <IoHome size={18} />
            <span className="ml-2">หน้าหลัก</span>
          </Button>
        </Link>

        <Link to="/profile" className="no-underline">
          <Button
            size="3"
            variant="solid"
            className={`rounded-full font-medium transition-all duration-300 ${
              isActive("/profile")
                ? "bg-gradient-to-r from-pink-500 to-rose-400 text-white shadow-[0_0_12px_rgba(255,182,193,0.6)]"
                : "bg-white text-pink-600 border border-pink-200 hover:bg-pink-100"
            }`}
          >
            <FaFolderOpen size={18} />
            <span className="ml-2">ประวัติส่วนตัว</span>
          </Button>
        </Link>
      </Flex>
    </Box>
  );
}

export default Navigation;

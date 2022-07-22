import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import Tooltip from "@mui/material/Tooltip"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useAppSelector } from "../../app/hooks";
import { selectCartItem } from "./CartSlice";
import CartItem from "./CartItem";
import Badge from "@mui/material/Badge";

export interface CartProps {
    anchorElUser: HTMLElement | null;
    handleOpenUserMenu: (event: React.MouseEvent<HTMLElement>) => void;
    handleCloseUserMenu: () => void;
}

const Cart = (props: CartProps) => {

    const carItem = useAppSelector(selectCartItem);

    const { anchorElUser, handleOpenUserMenu, handleCloseUserMenu } = props;

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Cart">
                <Badge badgeContent={carItem?.length} color="error">
                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <ShoppingCartIcon sx={{ display: { xs: 'flex' }, mr: 1 }} />
                    </IconButton>
                </Badge>
            </Tooltip>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}>
                {/* {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                        <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                ))} */}
                <CartItem carItem={carItem} handleCloseUserMenu={handleCloseUserMenu} />
            </Menu>
        </Box>
    )
}
export default Cart
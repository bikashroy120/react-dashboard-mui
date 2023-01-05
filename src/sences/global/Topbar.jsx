import { DarkModeOutlined, LightModeOutlined, NotificationAddOutlined, PersonOutlined, Search, SettingsOutlined } from '@mui/icons-material'
import { Box, IconButton, InputBase, useTheme } from '@mui/material'
import React,{useContext} from 'react'
import {ColorModeContext,tokens} from "../../theme"

const Topbar = () => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode)
    const colorMode = useContext(ColorModeContext)
  return (
    <Box display={"flex"} justifyContent="space-between" p={2}>
        <Box display={"flex"} backgroundColor={colors.primary[400]} borderRadius="3px">
            <InputBase sx={{ml:2,flex:1}} placeholder='Search'/>
            <IconButton>
                <Search />
            </IconButton>           
        </Box>
        <Box>
            <IconButton onClick={colorMode.toggleColorMode}>
                {theme.palette.mode === "dark" ? (
                    <DarkModeOutlined />
                ):(
                    <LightModeOutlined />
                )}
            </IconButton>
            <IconButton>
                <NotificationAddOutlined />
            </IconButton>
            <IconButton>
                <SettingsOutlined />
            </IconButton>
            <IconButton>
                <PersonOutlined />
            </IconButton>
        </Box>
    </Box>
  )
}

export default Topbar
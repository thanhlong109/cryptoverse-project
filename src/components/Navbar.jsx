import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd';
import {Link} from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
       <div>
            <Avatar size={'large'} src='https://th.bing.com/th/id/OIP.cT9x0K2w4HcC5YBCICXkGwHaHa?w=1080&h=1080&rs=1&pid=ImgDetMain'/>
            <Typography.Title level={2}>
                <Link to={'/'} >Crytoverse</Link>
            </Typography.Title>
       </div>
    </div>
  )
}

import React, { useState } from 'react';
import { classNames } from 'shared/lib/classnames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };
    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <Button theme={ThemeButton.CLEAR} onClick={onToggle}>toggle</Button>
        </div>
    );
};

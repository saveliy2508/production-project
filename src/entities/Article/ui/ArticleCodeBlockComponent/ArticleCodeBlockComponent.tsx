import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import { memo } from 'react';
import cls from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string
}

export const ArticleCodeBlockComponent = memo(({ className }: ArticleCodeBlockComponentProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticleCodeBlockComponent, {}, [className])} />
    );
});

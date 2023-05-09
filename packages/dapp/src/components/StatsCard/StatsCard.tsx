import { Breakpoint, Typography, useTheme } from '@mui/material';
import { Card, Container } from './StatsCard.style';

interface StatsCardProps {
  number: number;
  title: string;
}

export const StatsCard = ({ number, title }: StatsCardProps) => {
  const theme = useTheme();
  return (
    <Card>
      <Typography
        variant={'lifiBrandHeaderXLarge'}
        style={{
          fontSize: '24px',
          lineHeight: '32px',
          [theme.breakpoints.up('sm' as Breakpoint)]: {
            fontSize: '32px',
            lineHeight: '40px',
          },
        }}
      >
        {number}
      </Typography>
      <Typography
        variant={'lifiBrandHeaderLarge'}
        style={{
          fontSize: '10px',
          lineHeight: '16px',
          [theme.breakpoints.up('sm' as Breakpoint)]: {
            fontSize: '32px',
            lineHeight: '40px',
          },
        }}
      >
        {title}
      </Typography>
    </Card>
  );
};

export const StatsCards = () => {
  const data = [
    {
      title: 'Chains',
      number: 17,
    },
    {
      title: 'Bridges',
      number: 14,
    },
    {
      title: 'DEXs',
      number: 34,
    },
  ];
  return (
    <Container>
      {data.map((el, index) => {
        return (
          <StatsCard
            key={`stats-card-${index}`}
            title={el.title}
            number={el.number}
          />
        );
      })}
    </Container>
  );
};
import { Box } from '../../components/Box';
import Base from '../../layouts/Base';

export const metadata = {
  title: 'Reminder',
  description:
    'Time is the most important asset. Time does not equal money. Time equals life. And you only have one chance to make it right.',
  openGraph: {
    title: 'Reminder // Zeno Rocha',
    url: 'https://zenorocha.com/reminder',
    images: ['/static/images/reminder-bw.jpg']
  }
};

export default function Reminder() {
  return (
    <Base
      title="Reminder // Zeno Rocha"
      tagline="Tick-tock. Tick-tock."
      primaryColor="cyan"
      secondaryColor="green"
    >
      <Box className="text-justify">
        <p>
          <strong>Time is the most important asset.</strong> Time does not equal
          money. <strong>Time equals life.</strong> And you only have one chance
          to make it right.{' '}
          <strong>
            Every human being is fighting a battle inside themselves.
          </strong>{' '}
          It&apos;s your <strong>obligation</strong> to help and{' '}
          <strong>inspire</strong> them. Regardless of what you do, you can
          always inspire others to do good. Nobody is better than you.{' '}
          <strong>And you&apos;re not better than anybody else.</strong> Be
          humble. Being in the <strong>comfort zone</strong> is wonderful, but
          nothing ever grows there. Keep studying.{' '}
          <strong>Keep creating.</strong> Haters will come if you have the{' '}
          <strong>audacity to build something new</strong>. Don&apos;t let them
          define you. <strong>Don&apos;t let them stop you.</strong> Just block
          them and keep going. Don&apos;t expect{' '}
          <strong>others to make you happy</strong>. You are the only one{' '}
          <strong>responsible for your happiness</strong>.{' '}
          <strong>Don&apos;t wait</strong> until friday to enjoy life. Joy
          should be present in everything you do.{' '}
          <strong>Be kind to your parents</strong>. They gave up many things for
          you. Having hundreds of <strong>people admiring you</strong> is
          worthless, if you&apos;re not admired by your own family. Don&apos;t
          fear the unknown. Fear knowing everything.{' '}
          <strong>Life is too damn short</strong> and every day counts.{' '}
          <strong>Do what you wanna do and do it now</strong>. Tick-tock
          don&apos;t stop. Tick-tock don&apos;t wait.
        </p>
        <p>
          <em>- by Zeno & Carol</em>
        </p>
      </Box>
    </Base>
  );
}

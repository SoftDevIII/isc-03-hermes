import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ButtonShare from './SocialShareButton';

function SocialLocationSharing() {
  const handleShareSocial = ({
    msg,
    extra,
    url,
    url2
  }: HandleShareSocialProps) => {
    const messageEncoded = encodeURIComponent(msg);
    if (extra && url2) {
      const extraEncoded = encodeURIComponent(extra);
      window.open(`${url} ${extraEncoded} ${url2} ${messageEncoded}`, '_blank');
      return;
    }
    window.open(`${url} ${messageEncoded}`, '_blank');
  };

  return (
    <div className='flex flex-col items-center md:flex-row justify-center landscape:md:flex-col'>
      <div className='flex'>
        <ButtonShare
          name='Whatsapp'
          onClick={() =>
            handleShareSocial({
              msg: 'message',
              url: 'https://wa.me/?text=',
              extra: null,
              url2: null
            })
          }
        >
          <WhatsAppIcon />
        </ButtonShare>
        <ButtonShare
          name='Facebook'
          onClick={() =>
            handleShareSocial({
              msg: 'message',
              url: 'https://www.facebook.com/sharer/sharer.php?u=',
              extra: 'www.google.com',
              url2: '&quote='
            })
          }
        >
          <FacebookIcon fontSize='inherit' />
        </ButtonShare>
        <ButtonShare
          name='Twitter'
          onClick={() =>
            handleShareSocial({
              msg: 'message',
              url: 'https://twitter.com/intent/tweet?text=',
              extra: null,
              url2: null
            })
          }
        >
          <TwitterIcon />
        </ButtonShare>
      </div>
      <div className='flex'>
        <ButtonShare
          name='Outlook'
          onClick={() =>
            handleShareSocial({
              msg: 'message',
              url: 'https://outlook.office.com/?path=/mail/action/compose&subject=',
              extra: 'subject',
              url2: '&body='
            })
          }
        >
          <MailOutlineIcon />
        </ButtonShare>
        <ButtonShare
          name='Gmail'
          onClick={() =>
            handleShareSocial({
              msg: 'message',
              url: 'https://mail.google.com/mail/?view=cm&fs=1&to=&su=',
              extra: 'subject',
              url2: '&body='
            })
          }
        >
          <EmailIcon />
        </ButtonShare>
      </div>
    </div>
  );
}

export default SocialLocationSharing;

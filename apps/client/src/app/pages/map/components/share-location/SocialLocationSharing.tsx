import facebookIcon from '@map-assets/facebook-icon.png';
import gmailIcon from '@map-assets/gmail-icon.png';
import outlookIcon from '@map-assets/outlook-icon.png';
import twitterIcon from '@map-assets/twitter-icon.png';
import whatsappIcon from '@map-assets/whatsapp-icon.png';
import ButtonShare from '@map-components/share-location/components/SocialShareButton';

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
    <div className=''>
      <div className='flex items-center justify-center px-10 bg-slate-100'>
        <ButtonShare
          name='Facebook'
          image={facebookIcon}
          onClick={() =>
            handleShareSocial({
              msg: 'message',
              url: 'https://www.facebook.com/sharer/sharer.php?u=',
              extra: 'www.google.com',
              url2: '&quote='
            })
          }
        />
        <ButtonShare
          name='Gmail'
          image={gmailIcon}
          onClick={() =>
            handleShareSocial({
              msg: 'message',
              url: 'https://mail.google.com/mail/?view=cm&fs=1&to=&su=',
              extra: 'subject',
              url2: '&body='
            })
          }
        />
        <ButtonShare
          name='Outlook'
          image={outlookIcon}
          onClick={() =>
            handleShareSocial({
              msg: 'message',
              url: 'https://outlook.office.com/?path=/mail/action/compose&subject=',
              extra: 'subject',
              url2: '&body='
            })
          }
        />
        <ButtonShare
          name='Twitter'
          image={twitterIcon}
          onClick={() =>
            handleShareSocial({
              msg: 'message',
              url: 'https://twitter.com/intent/tweet?text=',
              extra: null,
              url2: null
            })
          }
        />
        <ButtonShare
          name='Whatsapp'
          image={whatsappIcon}
          onClick={() =>
            handleShareSocial({
              msg: 'message',
              url: 'https://wa.me/?text=',
              extra: null,
              url2: null
            })
          }
        />
      </div>
    </div>
  );
}

export default SocialLocationSharing;

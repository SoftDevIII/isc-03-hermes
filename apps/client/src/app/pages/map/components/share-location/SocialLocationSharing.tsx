import ButtonShare from '@map-components/share-location/components/SocialShareButton';
import facebokIcon from '@map-assets/facebook-icon.png';
import gmailIcon from '@map-assets/gmail-icon.png';
import outlookIcon from '@map-assets/outlook-icon.png';
import twitterIcon from '@map-assets/twitter-icon.png';
import whapsappIcon from '@map-assets/whatsapp-icon.png';

function SocialLocationSharing() {
  const handleShareSocial = ({ msg, extra, url, url2 }) => {
    const messageEncoded = encodeURIComponent(msg);
    if (extra != null && url2 != null) {
      const extraEnconded = encodeURIComponent(extra);
      window.open(`${url} ${extraEnconded} ${url2} ${messageEncoded}`, '_blank');
    } else {
      window.open(`${url} ${messageEncoded}`, '_blank');
    }
  };
  return (
    <div className='flex items-center justify-center px-10'>
      <ButtonShare
        name='Facebook'
        image={facebokIcon}
        onClick={() =>
          handleShareSocial({
            msg: 'message',
            url: 'https://www.facebook.com/sharer/sharer.php?u=',
            extra: 'www.google.com', // link required only in facebook
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
        image={whapsappIcon}
        onClick={() =>
          handleShareSocial({
            msg: 'message',
            url: 'https://wa.me/?text=', // To test it on pc I use url: 'https://web.whatsapp.com/send?text='
            extra: null,
            url2: null
          })
        }
      />
    </div>
  );
}

export default SocialLocationSharing;

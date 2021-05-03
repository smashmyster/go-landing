import {connect} from 'react-redux';
import {useEffect} from 'react';

const Intercom = (props: {user: any}) => {
  const {user} = props;

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    const inlineScript = document.createTextNode(
      "(function(){var w=window;var ic=w.Intercom;if(typeof ic===\"function\"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/ftyak6d0';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();",
    );
    script.appendChild(inlineScript);

    if (user) {
      // @ts-ignore
      window.intercomSettings = {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        app_id: 'ftyak6d0',
        name: user,
        email: '',
      };

      document.body.appendChild(script);
    }

    return () => {
      // @ts-ignore
      window.intercomSettings = undefined;
      document.body.removeChild(script);
      const frame = document.getElementById('intercom-frame');
      frame?.parentNode?.removeChild(frame);
      const intercom = document
        .getElementsByClassName('intercom-lightweight-app')
        .item(0);
      intercom?.parentNode?.removeChild(intercom);
    };
  }, [user]);

  return null;
};

const mapStateToProps = () => {
  return {
    user: 'there',
  };
};

export default connect(mapStateToProps)(Intercom);


import { useEffect } from 'react';

const TawkTo = () => {
    useEffect(() => {
        // Check if script already exists to prevent duplicates
        if (document.getElementById('tawk-script')) return;

        var Tawk_API: any = (window as any).Tawk_API || {};
        var Tawk_LoadStart = new Date();
        (window as any).Tawk_API = Tawk_API;
        (window as any).Tawk_LoadStart = Tawk_LoadStart;

        const s1 = document.createElement("script");
        const s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        s1.src = 'https://embed.tawk.to/69931dc273d8cb1c357e2bc9/1jhjaogjr';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s1.id = 'tawk-script';

        if (s0 && s0.parentNode) {
            s0.parentNode.insertBefore(s1, s0);
        }
    }, []);

    return null;
};

export default TawkTo;

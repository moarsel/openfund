import React from 'react'
import { Body } from '../Typography/Body'

export function SocialShare({ children, className = '', ...props }) {
  return (
    <div className={`flex flex-wrap items-center py-3 ${className}`} {...props}>
      <Body> {children} </Body>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          document.URL
        )}`}
        target="_blank"
        rel="noreferrer"
        title="Facebook"
        className="flex flex-wrap justify-center ml-2 rounded-md align-center"
        style={{ width: '2em', height: '2em', background: '#3b5998' }}
      >
        <svg
          // style="display:block;fill:#fff;height:44%;margin:28% auto;"
          style={{ fill: '#FFF', height: '56%', margin: '23% auto' }}
          viewBox="0 -256 864 1664"
        >
          <path
            transform="matrix(1,0,0,-1,-95,1280)"
            d="M 959,1524 V 1260 H 802 q -86,0 -116,-36 -30,-36 -30,-108 V 927 H 949 L 910,631 H 656 V -128 H 350 V 631 H 95 v 296 h 255 v 218 q 0,186 104,288.5 104,102.5 277,102.5 147,0 228,-12 z"
          />
        </svg>
      </a>{' '}
      <a
        href={`https://twitter.com/share?url=${encodeURIComponent(
          document.URL
        )}&text=${encodeURIComponent(document.title)}`}
        target="_blank"
        rel="noreferrer"
        title="Twitter"
        className="flex flex-wrap justify-center ml-2 rounded-md align-center"
        style={{ width: '2em', height: '2em', background: '#1b95e0' }}
      >
        <svg
          // style="display:block;fill:#fff;height:36%;margin:32% auto;"
          style={{ fill: '#FFF', height: '36%', margin: '32% auto' }}
          viewBox="0 -256 1576 1280"
        >
          <path
            transform="matrix(1,0,0,-1,-44,1024)"
            d="m 1620,1128 q -67,-98 -162,-167 1,-14 1,-42 0,-130 -38,-259.5 Q 1383,530 1305.5,411 1228,292 1121,200.5 1014,109 863,54.5 712,0 540,0 269,0 44,145 q 35,-4 78,-4 225,0 401,138 -105,2 -188,64.5 -83,62.5 -114,159.5 33,-5 61,-5 43,0 85,11 Q 255,532 181.5,620.5 108,709 108,826 v 4 q 68,-38 146,-41 -66,44 -105,115 -39,71 -39,154 0,88 44,163 Q 275,1072 448.5,982.5 622,893 820,883 q -8,38 -8,74 0,134 94.5,228.5 94.5,94.5 228.5,94.5 140,0 236,-102 109,21 205,78 -37,-115 -142,-178 93,10 186,50 z"
          />
        </svg>
      </a>{' '}
      <a
        href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(
          document.URL
        )}&title=${encodeURIComponent(document.title)}`}
        target="_blank"
        rel="noreferrer"
        title="LinkedIn"
        className="flex flex-wrap justify-center ml-2 rounded-md align-center"
        style={{ width: '2em', height: '2em', background: '#0077b5' }}
      >
        <svg
          style={{ fill: '#FFF', height: '42%', margin: '29% auto' }}
          viewBox="0 -256 1536 1468"
        >
          <path
            transform="matrix(1,0,0,-1,0,1132)"
            d="M 349,911 V -80 H 19 v 991 h 330 z m 21,306 q 1,-73 -50.5,-122 Q 268,1046 184,1046 h -2 q -82,0 -132,49 -50,49 -50,122 0,74 51.5,123 51.5,48 134.5,48 83,0 133,-48 50,-49 51,-123 z M 1536,488 V -80 h -329 v 530 q 0,105 -40,164.5 Q 1126,674 1040,674 977,674 934.5,639.5 892,605 871,554 860,524 860,473 V -80 H 531 q 2,399 2,647 0,248 -1,296 l -1,48 H 860 V 767 h -2 q 20,32 41,56 21,24 56.5,52 35.5,28 87.5,43.5 51,15.5 114,15.5 171,0 275,-113.5 Q 1536,707 1536,488 z"
          />
        </svg>
      </a>
      <a
        href={`mailto:?body=${encodeURIComponent(
          document.URL
        )}%0A%0A${encodeURIComponent(
          document.querySelector('meta[name=description]')
            ? document.querySelector('meta[name=description]').content
            : ''
        )}&subject=${encodeURIComponent(document.title)}`}
        title="Mail"
        target="_blank"
        rel="noreferrer"
        className="flex flex-wrap justify-center ml-2 rounded-md align-center"
        style={{ width: '2em', height: '2em', background: '#555' }}
      >
        <svg
          // style="display:block;fill:#fff;height:36%;margin:32% auto;"
          style={{ fill: '#FFF', height: '36%', margin: '32% auto' }}
          viewBox="0 -256 1792 1408"
        >
          <path
            transform="matrix(1,0,0,-1,0,1024)"
            d="M 1792,826 V 32 q 0,-66 -47,-113 -47,-47 -113,-47 H 160 Q 94,-128 47,-81 0,-34 0,32 V 826 Q 44,777 101,739 463,493 598,394 655,352 690.5,328.5 726,305 785,280.5 844,256 895,256 h 1 1 q 51,0 110,24.5 59,24.5 94.5,48 35.5,23.5 92.5,65.5 170,123 498,345 57,39 100,87 z m 0,294 q 0,-79 -49,-151 -49,-72 -122,-123 -376,-261 -468,-325 -10,-7 -42.5,-30.5 -32.5,-23.5 -54,-38 Q 1035,438 1004.5,420 974,402 947,393 q -27,-9 -50,-9 h -1 -1 q -23,0 -50,9 -27,9 -57.5,27 -30.5,18 -52,32.5 -21.5,14.5 -54,38 Q 649,514 639,521 548,585 377,703.5 206,822 172,846 110,888 55,961.5 0,1035 0,1098 q 0,78 41.5,130 41.5,52 118.5,52 h 1472 q 65,0 112.5,-47 47.5,-47 47.5,-113 z"
          />
        </svg>
      </a>
    </div>
  )
}

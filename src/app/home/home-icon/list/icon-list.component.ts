import { Component, Input } from '@angular/core';
import { HomeIcon } from '../icon/icon';

@Component({
  selector: 'home-icon-list',
  templateUrl: './icon-list.component.html',
  styleUrls: ['./icon-list.component.css']
})
export class HomeIconListComponent {

  @Input() icons: HomeIcon[] = [
    {
      href: "/materialdidatico",
      title: "Material didático",
      svg: false,
      src: "https://s3-alpha-sig.figma.com/img/e79e/d0b1/b906313d037f386209e02db041a40d2e?Expires=1682899200&Signature=hnct83vPxD71n-hNhwtO~PRGgELfggdb94jVSZeZXNeaCFS0s~kmTh9yQhFEWgzb24sk9vhfjsPmfm1hLiUg5gRpWlyney1d2ULOKa5qEpAvmeJsA-yNfwOjaqA4aV04hRdLltu1AEFfv0~o3OXZ8tnsztoPPM1JQVKEtOQnUTJUERv9vqUKI5wpHNjXKKCGIdU7Tc3uP1vMLCvG7wkXO83ED4SslOQtxTSAMVhDgu0YH~qWx0hyyvZ681hb5YrXF2P1vL6GBzr8FFKSIpvEdXzTxvJoHM5yQxHqSS3ZCIazl5ZrfWBSZooshJbhVx51P1q8p--SeZZre7~F1Wc2eQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      alt: "Study Book"
    },
    {
      href: "/home",
      title: "Quiz",
      svg: false,
      src: "https://s3-alpha-sig.figma.com/img/f0b8/df62/b8007f572cd6e0df358d16ba809225c1?Expires=1682899200&Signature=GeMDQs~o4v~P4o7iqMASkbP7AFqTzS5Vhk3IBfzLQ1Z9d4J6TPQ1j-Kuav9glXiV1ZINb4Kf8SE~qqfBhYXhx2qclSal362XCXGRqWjg2og03RxIijgjj7Pl1fX1yQST6TT8lyWZdEmq-kiFAAw~~uHlcOkiLhjnSLmlWyfK3ebzPcB-Q8yIn6MjeKJ-l0kfNK-gWuw2C-hBiJfmSi3eTLVGNiENwv4aobjHrrYc1xIOvj0c6LnQHW2oervu26e1O~gb5g6j5DNeUf0NJ~6hwei85BX7s2QBkuL8i1QKaHEnuV~U-1NHbrrjvq1YKjaXwP3GqyGar9MDNdWkjbOY9w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      alt: "Medal"
    },
    {
      href: "/home",
      title: "Desenho",
      svg: false,
      src: "https://s3-alpha-sig.figma.com/img/726f/81ed/85ed31a2919bf51230cc3b5413dd4e6a?Expires=1682899200&Signature=ehLzq30kNZBx4lCqdgsHIFJDvLnz335cRwYibo4pkzxewws4cDBd4cXLM7q94iGoqqS1fRRK9ZtOLtHKnLD0RhKMwn7FKBNSus5RwaFio4Ai9hrShmrKaPJK4KqSOdRDiMRjd7gUgSYnfwRh0Mi0KB1eot1ozJ82aQmqwX0SQm3CsCcEzf8d2J-EjZphUFwMjoA1tB5wtH6ef8knK5UotuwnJxBSPCGj1NWC28YddB2jYbeTQ8pRvyxpjSXJQo4wBYZm0T92GH33jBXmaqf5ppgnLELfyDpdHAS7S7nbFS1-kkYJpRoV9d1kTRpdiCegiFHwXUWq2xVVKlSn0Z8xlA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
      alt: "Paint"
    },
    {
      href: "/youtube",
      title: "Youtube",
      svg: true,
    }
  ];

  constructor() { }

}
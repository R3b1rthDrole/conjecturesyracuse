import fetch from 'node-fetch';

let finish = true;
let number = 1;

while (finish) {

    let NewN = number;
    let tentatives = 0;
    while (NewN !== 1) {
        if (NewN % 2 === 0) {
            NewN = NewN / 2
            tentatives++
            if (tentatives > 999999) finish = false;
        } else {
            NewN = (NewN * 3) + 1
            tentatives++
            if (tentatives > 999999) finish = false;
        }
    }
   
    if(number >= 1000000 && number % 1000000 === 0) {
        console.log(number, tentatives, "\u2713")
    }
    
    number++

}

fetch(
  'https://discord.com/api/webhooks/897617203246039040/aSlvVAF7OtfjReqT7LRrqPvyLrsbPIE3X5mb2HBUVdPfw4N8CWP-HQuT3ldLeYkOJCiY',
  {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      avatar_url: "https://cdn.discordapp.com/avatars/273926313352626178/f1758408e5541dcaa090e8f5194ddca1.webp?size=128",  
      content:
        '||@everyone||',
      allowed_mentions: {
        parse: ['everyone'],
      },
      embeds: [
        {
          color: 11730954,
          author: {
            name: 'R3b1rth',
            icon_url: 'https://cdn.discordapp.com/avatars/273926313352626178/f1758408e5541dcaa090e8f5194ddca1.webp?size=128',
          },
          title: 'Nombre trouvé !',
          description: `Nombre: ${number} - Tentatives: ${tentatives}`,
        },
      ],
    }),
  }
);

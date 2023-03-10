var videoUrls = [
  {
    url: 'https://www.youtube.com/watch?v=xcyt90EBYnk',
    title: 'Charlie Parker - I\'ll Remember April'
  },
  {
    url: 'https://www.youtube.com/watch?v=kEq6p8FQ8vY',
    title: 'Frank Sinatra - When The World Was Young'
  },
  {
    url: 'https://www.youtube.com/watch?v=EJLDd-VOH1U',
    title: 'Joe Dassin - Et Si Tu N\' Existais Pas'
  },
  {
    url: 'https://www.youtube.com/watch?v=jy5x7bDYd4o',
    title: 'Ella Fitzgerald - Misty'
  },
  {
    url: 'https://www.youtube.com/watch?v=N-TKOh0zsvU',
    title: 'Stan Getz, Astrud Gilberto - The Girl From Ipanema'
  },
  {
    url: 'https://www.youtube.com/watch?v=Md2Sbq28Lc4',
    title: 'Pink Martini - Je Ne Veux Pas Travailler'
  },
  {
    url: 'https://www.youtube.com/watch?v=cGGFDp4hsYY',
    title: 'Charles Trenet - Douce France'
  },
  {
    url: 'https://www.youtube.com/watch?v=K1JoaP7jykc',
    title: 'Sugarpie And The Candymen - When I\'m Sixty-Four'
  },
  {
    url: 'https://www.youtube.com/watch?v=xdcSFVXd3MU',
    title: 'The Beatles - Here, There And Everywhere (Remastered 2009)'
  },
  {
    url: 'https://www.youtube.com/watch?v=VWO3nEuWo4k',
    title: 'The Beatles - Something (Remastered 2009)'
  },
  {
    url: 'https://www.youtube.com/watch?v=zmt9d6zr0bs',
    title: 'Shirley Jones - Till There Was You (From "The Music Man")'
  },
  {
    url: 'https://www.youtube.com/watch?v=lcPysdkwiAE',
    title: 'Adam Cooper, Daniel Crossley - Moses Supposes (From "Singin\' In The Rain" - 2012 London Cast)'
  },
  {
    url: 'https://www.youtube.com/watch?v=oDbYZDmLisY',
    title: 'Irving Berlin - Overture (From "Top Hat" - Original London Cast Recording)'
  },
  {
    url: 'https://www.youtube.com/watch?v=nNFKnbQmt5s',
    title: 'Richard Rodgers - Overture (From "Oklahoma" - 1998 National Theatre Cast Recording Orchestra)'
  },
  {
    url: 'https://www.youtube.com/watch?v=nAsXR3d62Wg',
    title: 'Leonard Bernstein - Maria (From "West Side Story")'
  },
  {
    url: 'https://www.youtube.com/watch?v=nAsXR3d62Wg',
    title: 'Nino Rota - Fortunella (From "Fortunella") '
  },
  {
    url: 'https://www.youtube.com/watch?v=ZJcCPmPKlPQ',
    title: 'David Davidson - Speak Softly, Love'
  },
  {
    url: 'https://www.youtube.com/watch?v=ABfQuZqq8wg',
    title: 'Marvin Gaye, Tammi Terrell - Ain\'t No Mountain High Enough'
  },
  {
    url: 'https://www.youtube.com/watch?v=b32vFD5Acrc',
    title: 'Samuel E. Wright - Under The Sea (From "The Little Mermaid")'
  },
  {
    url: 'https://www.youtube.com/watch?v=FS8ydFYw8Sw',
    title: 'Richard M. Sherman, Robert M. Sherman - Overture (From "Mary Poppins")'
  },
  {
    url: 'https://www.youtube.com/watch?v=qQzdAsjWGPg',
    title: 'Frank Sinatra - My Way'
  },
  {
    url: 'https://www.youtube.com/watch?v=0QUOR_KPf34',
    title: 'Charles Trenet - La Mer'
  },
  {
    url: 'https://www.youtube.com/watch?v=4mppAFu3dqw',
    title: 'Dean Martin - Volare (Nel Blu Di Pinto Di Blu)'
  },
  {
    url: 'https://www.youtube.com/watch?v=l95GjLsH2xk',
    title: 'Dean Martin - Young And Foolish'
  },
  {
    url: 'https://www.youtube.com/watch?v=RbSFlD8Cktg',
    title: 'Ella Fitzgerald - My Funny Valentine'
  },
  {
    url: 'https://www.youtube.com/watch?v=VDuDQNkSC6g',
    title: 'Kingo Hamada - Machi No Dorufin (Dolphin In Town)'
  },
  {
    url: 'https://www.youtube.com/watch?v=Uf4rxCB4lys',
    title: 'Chuck Berry - Johnny B. Goode'
  },
  {
    url: 'https://www.youtube.com/watch?v=PKnPrbPK5vA',
    title: 'The Chordettes - Mr. Sandman'
  },
  {
    url: 'https://www.youtube.com/watch?v=vTMSj7gDEGs',
    title: 'Earth, Wind & Fire - Sing A Song'
  },
  {
    url: 'https://www.youtube.com/watch?v=QAo_Ycocl1E',
    title: 'Toto - Africa'
  },
  {
    url: 'https://www.youtube.com/watch?v=tyHBjcyfJCs',
    title: 'Toto - Pamela'
  },
  {
    url: 'https://www.youtube.com/watch?v=OTCjfPmW1_8',
    title: 'Julie London - Fly Me To The Moon'
  },
  {
    url: 'https://www.youtube.com/watch?v=2t5VNI0XlwY',
    title: 'Aretha Franklin - I Say A Little Prayer'
  },
  {
    url: 'https://www.youtube.com/watch?v=8Nzy1cfnKh4',
    title: 'Vera Lynn - We\'ll Meet Again'
  },
  {
    url: 'https://www.youtube.com/watch?v=iP0tHmoc1rs',
    title: 'Kitty Kallen - It\'s Been A Long, Long Time'
  },
  {
    url: 'https://www.youtube.com/watch?v=sySlY1XKlhM',
    title: 'B.J. Thomas - Raindrops Keep Falling On My Head'
  },
  {
    url: 'https://www.youtube.com/watch?v=QApcQh9_kQw',
    title: 'Sarah McLachlan - When She Loved Me (From "Toy Story 2")'
  },
  {
    url: 'https://www.youtube.com/watch?v=HQHdqbJQMrc',
    title: 'Randy Newman - Strange Things (From "Toy Story")'
  },
  {
    url: 'https://www.youtube.com/watch?v=0hG-2tQtdlE',
    title: 'Randy Newman - You\'ve Got A Friend In Me (From "Toy Story")'
  },
  {
    url: 'https://www.youtube.com/watch?v=FI3Pk4P087s',
    title: 'Billy Crystal, John Goodman - If I Didn\'t Have You (From "Monsters, Inc.")'
  },
  {
    url: 'https://www.youtube.com/watch?v=J4QU0XsWMX8',
    title: 'Randy Newman - Monsters, Inc. (From "Monsters, Inc.")'
  },
  {
    url: 'https://www.youtube.com/watch?v=oawnj3-1Zpg',
    title: 'Judy Garland - The Trolley Song (From "Meet Me In St. Louis")'
  },
  {
    url: 'https://www.youtube.com/watch?v=O526KtL5i3U',
    title: 'Edith Piaf - La Vie En Rose'
  },
  {
    url: 'https://www.youtube.com/watch?v=-QuVe-hjMs0',
    title: 'Camille - Le Festin (From "Ratatouille")'
  },
  {
    url: 'https://www.youtube.com/watch?v=2rn-vMbFglI',
    title: 'Michael Giacchino - Married Life (From "Up")'
  },
  {
    url: 'https://www.youtube.com/watch?v=hN5DKM72O_s',
    title: 'Michael Giacchino - The Spirit Of Adventure (From "Up")'
  },
  {
    url: 'https://www.youtube.com/watch?v=3SeLdQS2ZNo',
    title: 'Vulfpeck - Welcome To Vulf Records'
  },
  {
    url: 'https://www.youtube.com/watch?v=Zf1dn_wLDzc',
    title: 'Mr Scruff - Rocking Chair'
  },
  {
    url: 'https://www.youtube.com/watch?v=0keEkrQjshQ',
    title: 'Mr Scruff - Kalimba'
  },
  {
    url: 'https://www.youtube.com/watch?v=LpbHlXPmmcE',
    title: 'Alan Silvestri - Back To The Future (From "Back To The Future" - The Outatime Orchestra)'
  },
  {
    url: 'https://www.youtube.com/watch?v=7AR6KQOiNHA',
    title: 'John Williams - Flying Theme (From "E.T. The Extra-Terrestrial")'
  },
  {
    url: 'https://www.youtube.com/watch?v=bC77czRbjd0',
    title: 'John Williams - Raiders March (From "Indiana Jones")'
  },
  {
    url: 'https://www.youtube.com/watch?v=HrIJT_4Txqw',
    title: 'John Williams - Main Theme From "Star Wars"'
  },
  {
    url: 'https://www.youtube.com/watch?v=s3SZ5sIMY6o',
    title: 'John Williams - The Imperial March (Darth Vader\'s Theme)'
  },
  {
    url: 'https://www.youtube.com/watch?v=mAQQQyvZjN0',
    title: 'Henry Mancini - The Pink Panther Theme (From The Mirisch-G & E Production)'
  },
  {
    url: 'https://www.youtube.com/watch?v=Jc0FqF6Phzk',
    title: 'Frank Sinatra - Over The Rainbow (The Columbia Years 1943-1952)'
  },
  {
    url: 'https://www.youtube.com/watch?v=6POZlJAZsok',
    title: 'Grover Washington, Jr., Bill Withers - Just The Two Of Us'
  },
  {
    url: 'https://www.youtube.com/watch?v=EnNgASBdCeo',
    title: 'Stevie Wonder - Sir Duke'
  },
  {
    url: 'https://www.youtube.com/watch?v=c7IYSAUj78g',
    title: 'Stevie Wonder - I Wish'
  },
  {
    url: 'https://www.youtube.com/watch?v=XrhNxGJT83Q',
    title: 'Stevie Wonder - Isn\'t She Lovely'
  },
  {
    url: 'https://www.youtube.com/watch?v=e7krCeiOy6g',
    title: 'Earth, Wind And Fire - Got To Get You Into My Life'
  },
  {
    url: 'https://www.youtube.com/watch?v=YFDg-pgE0Hk',
    title: 'The Beatles - While My Guitar Gently Weeps (2018 Mix)'
  },
  {
    url: 'https://www.youtube.com/watch?v=x8hUwP_5Qc4',
    title: 'Queen - Somebody To Love (Remastered 2011)'
  },
  {
    url: 'https://www.youtube.com/watch?v=CczcMarUoVk',
    title: 'Queen - Don\'t Stop Me Now (Remastered 2011)'
  },
  {
    url: 'https://www.youtube.com/watch?v=bSnlKl_PoQU',
    title: 'Queen - Bohemian Rhapsody (Remastered 2011)'
  },
  {
    url: 'https://www.youtube.com/watch?v=PIFUWHvSixw',
    title: 'Journey - Don\'t Stop Believin\''
  },
  {
    url: 'https://www.youtube.com/watch?v=d9jhDwxt22Y',
    title: 'Joan Jett And The Blackhearts - I Love Rock N\' Roll'
  },
  {
    url: 'https://www.youtube.com/watch?v=oMfMUfgjiLg',
    title: 'Guns N\' Roses - Sweet Child O\' Mine'
  },
  {
    url: 'https://www.youtube.com/watch?v=zyi9TaN2i-Y',
    title: 'MIKA, Ariana Grande - Popular'
  },
  {
    url: 'https://www.youtube.com/watch?v=KRQPDlKoaWk',
    title: 'Vengaboys - We Like To Party! (The Vengabus)'
  },
  {
    url: 'https://www.youtube.com/watch?v=pa2j0Bh83ms',
    title: 'ABBA - Gimme! Gimme! Gimme! (A Man After Midnight)'
  },
  {
    url: 'https://www.youtube.com/watch?v=4hj8M8XZpis',
    title: 'Europe - The Final Countdown'
  },
  {
    url: 'https://www.youtube.com/watch?v=0hGhl7ki3HM',
    title: 'Fleetwood Mac - Don\'t Stop'
  },
  {
    url: 'https://www.youtube.com/watch?v=pSw8an1u3rc',
    title: 'The Turtles - Happy Together'
  },
  {
    url: 'https://www.youtube.com/watch?v=DkkQ8dCPiwA',
    title: 'ABBA - Take A Chance On Me'
  },
  {
    url: 'https://www.youtube.com/watch?v=tJxOXzE5A8w',
    title: 'Donna Summer - Hot Stuff (12" Version)'
  },
  {
    url: 'https://www.youtube.com/watch?v=sWMk8dwljFU',
    title: 'Taylor Swift - Shake It Off'
  },
  {
    url: 'https://www.youtube.com/watch?v=k6jscLH3p2g',
    title: 'Carly Rae Jepsen - Call Me Maybe'
  },
  {
    url: 'https://www.youtube.com/watch?v=p0BiGek2bKA',
    title: 'Kelly Clarkson - Since U Been Gone'
  },
  {
    url: 'https://www.youtube.com/watch?v=PNoIn1WKiEc',
    title: 'Vanessa Carlton - A Thousand Miles'
  },
  {
    url: 'https://www.youtube.com/watch?v=8ay_BkRuv-o',
    title: 'Smash Mouth - All Star'
  },
  {
    url: 'https://www.youtube.com/watch?v=tscL_I2v7pU',
    title: 'Spice Girls - Wannabe'
  },
  {
    url: 'https://www.youtube.com/watch?v=YBdyc1WDlBQ',
    title: 'Bon Jovi - Livin\' On A Prayer'
  },
  {
    url: 'https://www.youtube.com/watch?v=LwkrXybZ1uo',
    title: 'Backstreet Boys - I Want It That Way'
  },
  {
    url: 'https://www.youtube.com/watch?v=tVdr_JWmnsA',
    title: 'Britney Spears - Toxic'
  },
  {
    url: 'https://www.youtube.com/watch?v=wsHbHR3Os6U',
    title: 'Britney Spears - Oops!... I Did It Again'
  },
  {
    url: 'https://www.youtube.com/watch?v=91Niv2q4gvc',
    title: 'Britney Spears - Baby One More Time'
  },
  {
    url: 'https://www.youtube.com/watch?v=0BEf5AWLvJc',
    title: 'Mariah Carey - Emotions'
  },
  {
    url: 'https://www.youtube.com/watch?v=E7DU70UTI3Q',
    title: 'Bill Medley, Jennifer Warnes - The Time Of My Life (12" Version)'
  },
  {
    url: 'https://www.youtube.com/watch?v=6xzN8Nt0Pok',
    title: 'Whitney Houston - I Wanna Dance With Somebody'
  },
  {
    url: 'https://www.youtube.com/watch?v=Fl9vYOxfQ1I',
    title: 'Gloria Gaynor - Never Can Say Goodbye'
  },
  {
    url: 'https://www.youtube.com/watch?v=RN8Li7kYNnw',
    title: 'Village People - YMCA (Original Version 1978)'
  },
  {
    url: 'https://www.youtube.com/watch?v=PbpIyn70t8c',
    title: 'Earth, Wind & Fire - Boogie Wonderland'
  },
  {
    url: 'https://www.youtube.com/watch?v=RTqCusP0uzQ',
    title: 'Eddie Money - Two Tickets To Paradise'
  },
  {
    url: 'https://www.youtube.com/watch?v=ZP69PLBqFUo',
    title: 'Toto - Hold The Line'
  },
  {
    url: 'https://www.youtube.com/watch?v=SGtVZgCYVgk',
    title: 'Toto - Rosanna'
  },
  {
    url: 'https://www.youtube.com/watch?v=xvdQNuIojeI',
    title: 'Billy Joel - For The Longest Time'
  },
  {
    url: 'https://www.youtube.com/watch?v=Rc7_lCfbQP0',
    title: 'Bobby Darin - Beyond The Sea'
  },
  {
    url: 'https://www.youtube.com/watch?v=SAa4teWb0rU',
    title: 'Ella Fitzgerald - Blue Skies'
  },
  {
    url: 'https://www.youtube.com/watch?v=EahKmJ4-tjY',
    title: 'Ella Fitzgerald - The Lady Is A Tramp'
  },
  {
    url: 'https://www.youtube.com/watch?v=r1C69fzfGBM',
    title: 'Doris Day - Que Sera, Sera (Whatever Will Be, Will Be)'
  },
  {
    url: 'https://www.youtube.com/watch?v=wmRHeKF2kdU',
    title: 'Dean Martin - Everybody Loves Somebody'
  },
  {
    url: 'https://www.youtube.com/watch?v=-UbpcAqRowU',
    title: 'Perry Como - Killing Me Softly With Her Song'
  },
  {
    url: 'https://www.youtube.com/watch?v=TR1Y1qxkbLE',
    title: 'The Carpenters - Superstar'
  },
  {
    url: 'https://www.youtube.com/watch?v=V6MvuFGEapo',
    title: 'John Denver - Leaving On A Jet Plane'
  },
  {
    url: 'https://www.youtube.com/watch?v=c0dvabcWVo0',
    title: 'John Denver - Take Me Home, Country Roads (Original Version)'
  },
  {
    url: 'https://www.youtube.com/watch?v=YkLLcIKhJ64',
    title: 'ABBA - Dancing Queen'
  },
  {
    url: 'https://www.youtube.com/watch?v=KMViJKmAV4M',
    title: 'ABBA - Mamma Mia'
  },
  {
    url: 'https://www.youtube.com/watch?v=WbnG3eAGb6Y',
    title: 'ABBA - The Winner Takes It All'
  },
  {
    url: 'https://www.youtube.com/watch?v=GKdl-GCsNJ0',
    title: 'The Beatles - Here Comes The Sun (2019 Mix)'
  },
  {
    url: 'https://www.youtube.com/watch?v=BdEe5SpdIuo',
    title: 'Elton John - Rocket Man (I Think It\'s Going To Be A Long, Long Time)'
  },
  {
    url: 'https://www.youtube.com/watch?v=H6M0EulApMM',
    title: 'Billy Joel - Uptown Girl'
  },
  {
    url: 'https://www.youtube.com/watch?v=3cKtSlsYVEU',
    title: 'Earth, Wind & Fire - September'
  },
  {
    url: 'https://www.youtube.com/watch?v=bJ8Sz8CJY5g',
    title: 'ELO - Mr. Blue Sky'
  },
  {
    url: 'https://www.youtube.com/watch?v=xNDRrpG1Gc4',
    title: 'Gloria Gaynor - I Will Survive'
  },
  {
    url: 'https://www.youtube.com/watch?v=kvazBqAlx58',
    title: 'Paul Anka - Put Your Head On My Shoulder'
  },
  {
    url: 'https://www.youtube.com/watch?v=DYwQy_9JPtQ',
    title: 'Frankie Valli And The Four Seasons - Can\'t Take My Eyes Off You'
  },
  {
    url: 'https://www.youtube.com/watch?v=le1QF3uoQNg',
    title: 'Frank Sinatra - Theme From New York, New York (2008 Remastered)'
  },
  {
    url: 'https://www.youtube.com/watch?v=kbRindAErlo',
    title: 'Dean Martin - That\'s Amore'
  },
  {
    url: 'https://www.youtube.com/watch?v=8WyfVoFM9As',
    title: 'ABBA -  Chiquitita'
  }
];






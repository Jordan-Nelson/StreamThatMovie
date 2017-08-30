import { TestBed, inject } from '@angular/core/testing';

import { MovieInfoService } from './movie-info.service';
import { HttpModule, Http, Response, BaseRequestOptions, XHRBackend, ResponseOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';


describe('MovieInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        { provide: XHRBackend, useClass: MockBackend },
        MovieInfoService
      ]
    });
  });

  it('should be created', inject([MovieInfoService], (service: MovieInfoService) => {
    expect(service).toBeTruthy();
  }));

  fit('should return an observable of movie results', 
    inject([MovieInfoService, XHRBackend], (service: MovieInfoService, mockBackend: MockBackend) => {

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });


    service.getMovies('').subscribe((resp: any) => {
      expect(resp.results.length).toBeGreaterThan(0);
    })

  }));
});


const mockResponse = {
  "page": 1,
  "total_results": 493,
  "total_pages": 25,
  "results": [
    {
      "vote_count": 2552,
      "id": 264644,
      "video": false,
      "vote_average": 8.1,
      "title": "Room",
      "popularity": 5.04992,
      "poster_path": "/eqFckcHuFCT1FrzLOAvXBb4jHwq.jpg",
      "original_language": "en",
      "original_title": "Room",
      "genre_ids": [
        18,
        53
      ],
      "backdrop_path": "/tBhp8MGaiL3BXpPCSl5xY397sGH.jpg",
      "adult": false,
      "overview": "Jack is a young boy of 5 years old who has lived all his life in one room. He believes everything within it are the only real things in the world. But what will happen when his Ma suddenly tells him that there are other things outside of Room?",
      "release_date": "2015-10-16"
    },
    {
      "vote_count": 1167,
      "id": 4547,
      "video": false,
      "vote_average": 6.5,
      "title": "Panic Room",
      "popularity": 4.490328,
      "poster_path": "/hjkugMBhYjV8ZXgvSnGXI3q7wt7.jpg",
      "original_language": "en",
      "original_title": "Panic Room",
      "genre_ids": [
        80,
        18,
        53
      ],
      "backdrop_path": "/q1L2dZaa70CblveazvrZLLLQgzk.jpg",
      "adult": false,
      "overview": "Trapped in their New York brownstone's panic room, a hidden chamber built as a sanctuary in the event of break-ins, newly divorced Meg Altman and her young daughter Sarah play a deadly game of cat-and-mouse with three intruders - Burnham, Raoul and Junior - during a brutal home invasion. But the room itself is the focal point because what the intruders really want is inside it.",
      "release_date": "2002-03-29"
    },
    {
      "vote_count": 647,
      "id": 313922,
      "video": false,
      "vote_average": 6.7,
      "title": "Green Room",
      "popularity": 3.367398,
      "poster_path": "/sTlPvjdQrrv5cLH410aMlSxqi0x.jpg",
      "original_language": "en",
      "original_title": "Green Room",
      "genre_ids": [
        27,
        80,
        53
      ],
      "backdrop_path": "/fDCpcRwECUEISrZkHRehx8ge4BF.jpg",
      "adult": false,
      "overview": "A young punk rock band find themselves trapped in a secluded venue after stumbling upon a horrific act of violence.",
      "release_date": "2016-04-15"
    },
    {
      "vote_count": 188,
      "id": 14181,
      "video": false,
      "vote_average": 6.6,
      "title": "Boiler Room",
      "popularity": 3.008134,
      "poster_path": "/saPIJPgg5EHyduryuRAEr8y3SuX.jpg",
      "original_language": "en",
      "original_title": "Boiler Room",
      "genre_ids": [
        80,
        18,
        53
      ],
      "backdrop_path": "/rGs6hkQptil9OcAs8mBK6gky0YK.jpg",
      "adult": false,
      "overview": "A college dropout gets a job as a broker for a suburban investment firm, which puts him on the fast track to success, but the job might not be as legitimate as it sounds.",
      "release_date": "2000-02-18"
    },
    {
      "vote_count": 0,
      "id": 462385,
      "video": false,
      "vote_average": 0,
      "title": "Room No.7",
      "popularity": 1.903442,
      "poster_path": "/SremXQuqQ5p4O4l25XQzCu38Zr.jpg",
      "original_language": "ko",
      "original_title": "7호실",
      "genre_ids": [
        35,
        53
      ],
      "backdrop_path": null,
      "adult": false,
      "overview": "Tae-jung, the part-time worker of DVD room, a private room given to customers to view DVDs in complete privacy, hides a shipment of drugs in room #7 in exchange for wiping off his debt. One-day, Tae-jung goes back to the room to retrieve the drugs for dealer but realizes that the door is completely locked down by his employer, who also has secretly hidden a dead body inside. A dangerous battle of wits ensues between a man who must lock away the secret behind the door of room #7, and another, who must go inside.",
      "release_date": "2017-07-13"
    },
    {
      "vote_count": 2,
      "id": 69917,
      "video": false,
      "vote_average": 2.5,
      "title": "Room",
      "popularity": 1.015378,
      "poster_path": "/aMgTwJtGhAfPv3KKSRQ9qulyoff.jpg",
      "original_language": "en",
      "original_title": "Room",
      "genre_ids": [
        18,
        99
      ],
      "backdrop_path": null,
      "adult": false,
      "overview": "Julia Barker, an over-worked, middle-aged Texas woman is haunted by psychic visions which drive her to New York in search of the Room.",
      "release_date": "2005-04-01"
    },
    {
      "vote_count": 1,
      "id": 358223,
      "video": false,
      "vote_average": 7,
      "title": "Room",
      "popularity": 1.013112,
      "poster_path": "/qxheQeQmfZchyM2YIdQ8cKHTZJh.jpg",
      "original_language": "en",
      "original_title": "Room",
      "genre_ids": [
        18
      ],
      "backdrop_path": null,
      "adult": false,
      "overview": "Ana is connected to a chat room, with webcam power on showing her room. Among a seemingly small talk, she begins to show signs that something, in real life, is not going well at all.",
      "release_date": "2011-11-04"
    },
    {
      "vote_count": 8,
      "id": 226363,
      "video": false,
      "vote_average": 5.4,
      "title": "Powder Room",
      "popularity": 2.2931,
      "poster_path": "/rXwi3tEZdcdInq4Zt5y465edRwA.jpg",
      "original_language": "en",
      "original_title": "Powder Room",
      "genre_ids": [
        35
      ],
      "backdrop_path": "/n9ZjwpPAoLdA9gJoWvk0p153GG2.jpg",
      "adult": false,
      "overview": "This comedy follows Sam, as her life is turned upside down on a big night out. When reunited with her old college friends, Sam is forced to re-evaluate her life and constructs an elaborate façade in order to convince herself and her friends that she has it all. But once her dysfunctional yet devoted trio of best mates intervene, her carefully crafted charade begins to crumble amidst the shots, cigarettes, ciders and toilet transgressions. Faced with some very harsh realities, Sam must struggle to remain true to herself and reassess exactly what she wants from life.",
      "release_date": "2013-11-29"
    },
    {
      "vote_count": 122,
      "id": 293452,
      "video": false,
      "vote_average": 4.3,
      "title": "The Disappointments Room",
      "popularity": 3.551904,
      "poster_path": "/htnXSuO0gMawdCfOZwFEs8kMCl8.jpg",
      "original_language": "en",
      "original_title": "The Disappointments Room",
      "genre_ids": [
        18,
        53,
        27
      ],
      "backdrop_path": "/2ZBMxswLt150pkE4exLteIApjg6.jpg",
      "adult": false,
      "overview": "A mother and her young son release unimaginable horrors from the attic of their rural dream home.",
      "release_date": "2016-09-09"
    },
    {
      "vote_count": 8,
      "id": 58745,
      "video": false,
      "vote_average": 4.6,
      "title": "Red Room",
      "popularity": 1.073184,
      "poster_path": "/f5WLq19u1xuN4PXzM55YP6C94pH.jpg",
      "original_language": "fr",
      "original_title": "Akai misshitsu",
      "genre_ids": [
        27
      ],
      "backdrop_path": "/Ag97lFzP68LKiTaFEn2HyIGilWF.jpg",
      "adult": false,
      "overview": "How low would you go to win a million dollars? Just how desperate are you for the cash? Desperate enough to enter the Red Room? In this latest and most vicious game show to emerge from the Japanese underground, four contestants (a husband and wife on the edge of divorce, and two sisters) are locked in the Red Room to draw cards in the \"king game.\" Whoever draws the king selects two others to enter a cage where one performs the most outrageous acts upon his or her unlucky victim. The game is played to the death. Survivor takes all, and the losers go home in body bags!",
      "release_date": "1999-06-03"
    },
    {
      "vote_count": 170,
      "id": 17473,
      "video": false,
      "vote_average": 4.2,
      "title": "The Room",
      "popularity": 1.744296,
      "poster_path": "/zYM0l2XBkwxJQQBCmi9A6zEUJX0.jpg",
      "original_language": "en",
      "original_title": "The Room",
      "genre_ids": [
        18,
        10749
      ],
      "backdrop_path": "/mX7mlE1kaGohnSVDMSTlrvisYf7.jpg",
      "adult": false,
      "overview": "Johnny is a successful banker with great respect for and dedication to the people in his life, especially his future wife Lisa. The happy-go-lucky guy sees his world fall apart when his friends begin to betray him one-by-one.",
      "release_date": "2003-06-27"
    },
    {
      "vote_count": 0,
      "id": 449664,
      "video": false,
      "vote_average": 0,
      "title": "Escape Room",
      "popularity": 1.655684,
      "poster_path": "/mj9tyLHbNVzq8zGCb6ws1n2DlkH.jpg",
      "original_language": "en",
      "original_title": "Escape Room",
      "genre_ids": [],
      "backdrop_path": "/yOVRqaLBbQzLSndkIeHxTXpHbwd.jpg",
      "adult": false,
      "overview": "Six friends test their intelligence in a game that takes a dark turn.",
      "release_date": "2017-06-09"
    },
    {
      "vote_count": 0,
      "id": 287880,
      "video": false,
      "vote_average": 0,
      "title": "Bomi's Room",
      "popularity": 1.026332,
      "poster_path": null,
      "original_language": "en",
      "original_title": "보미의 방",
      "genre_ids": [
        18
      ],
      "backdrop_path": null,
      "adult": false,
      "overview": "Bomi is 12 years old. She wants her own room so badly. Her sister, Eonju, whom she shares the room with keeps sneaking a look at her diary. She studied really hard to get first place as her mom promised to get her own room if she did but her mom keeps denying the promise. So Bomi decides to marry her sister off! She finds out that the manager of a construction company like her sister and does her best to help him. The manager ends up winning her heart and proposes to Eonju. But she refuses his proposal. Bomi gets curious and tries to find out why she doesn't want to get married.",
      "release_date": "2014-08-21"
    },
    {
      "vote_count": 114,
      "id": 9819,
      "video": false,
      "vote_average": 6.6,
      "title": "Marvin's Room",
      "popularity": 1.432896,
      "poster_path": "/mousrrNQ0ypRjCvgYzgMrusTW8b.jpg",
      "original_language": "en",
      "original_title": "Marvin's Room",
      "genre_ids": [
        18
      ],
      "backdrop_path": "/8TjTqXjQMnuXEF3OfSmRvpUB4XA.jpg",
      "adult": false,
      "overview": "A leukemia patient attempts to end a 20-year feud with her sister to get her bone marrow.",
      "release_date": "1996-12-18"
    },
    {
      "vote_count": 9,
      "id": 55015,
      "video": false,
      "vote_average": 6.8,
      "title": "Home Room",
      "popularity": 1.53385,
      "poster_path": "/X3j2mq1t8Kz46iRR5JkfH3gqat.jpg",
      "original_language": "en",
      "original_title": "Home Room",
      "genre_ids": [
        18
      ],
      "backdrop_path": "/oDRb4jaKa9aoipOIvjL8l2GMQG4.jpg",
      "adult": false,
      "overview": "A high school shooting has repercussions on the town and students.",
      "release_date": "2002-04-12"
    },
    {
      "vote_count": 1,
      "id": 353380,
      "video": false,
      "vote_average": 10,
      "title": "Peter's Room",
      "popularity": 1.0012,
      "poster_path": null,
      "original_language": "sv",
      "original_title": "Peters rum",
      "genre_ids": [
        18
      ],
      "backdrop_path": "/ozbplg3FhAzIClulJ9xo64pIZO6.jpg",
      "adult": false,
      "overview": "One morning, Peter pretends he is asleep to prevent his parents from forcing him to leave his bed, to leave his home.",
      "release_date": ""
    },
    {
      "vote_count": 0,
      "id": 255504,
      "video": false,
      "vote_average": 0,
      "title": "Demon's Room",
      "popularity": 1.000051,
      "poster_path": "/o76RrfN0o8szO6yuQ3oqMlcbsQr.jpg",
      "original_language": "ja",
      "original_title": "Akuma no heya",
      "genre_ids": [
        53
      ],
      "backdrop_path": null,
      "adult": false,
      "overview": "Yoshiko Sejima gets a call from a man claiming to be from her husband's company. He tells her that he will come to pick her up on behalf of her husband. It turns out that he's a kidnapper and takes Yoshiko to a hotel, and proceeds to rape her. This man Fuji Nakatogawa calls Yoshiko's husband but doesn't request a ransom. He's just bent on humiliating Yoshiko to submission to be his sex slave.",
      "release_date": "1982-04-23"
    },
    {
      "vote_count": 0,
      "id": 322429,
      "video": false,
      "vote_average": 0,
      "title": "Maid's Room",
      "popularity": 1.000005,
      "poster_path": "/auBzq1wQR2vpA1pqHcumgyb77TA.jpg",
      "original_language": "en",
      "original_title": "Hahyeo-ui bang",
      "genre_ids": [
        53,
        27,
        9648
      ],
      "backdrop_path": null,
      "adult": false,
      "overview": "Kwang-yeol is placed in the mental hospital for no reason as soon as he comes back to Korea after studying abroad. He manages to escape from the hospital and the continuing mysterious incidents puts him in the train headed to Yeosu. On the train, Kwang-yeol comes across the detective Yu who shows him the picture of his twin brother Bong-yeol on the newspaper. He attends the Bong-yeol's funeral service and goes into Bong-yeol's house to run into Sul-hi, Bong-yeol's wife. Mystery is solved and Hye-young, the committer of all evil deed, commits suicide.",
      "release_date": "1987-10-30"
    },
    {
      "vote_count": 84,
      "id": 323272,
      "video": false,
      "vote_average": 6.7,
      "title": "War Room",
      "popularity": 1.471651,
      "poster_path": "/ufyybGW3q0wbATNg03geeSEdsDo.jpg",
      "original_language": "en",
      "original_title": "War Room",
      "genre_ids": [
        18
      ],
      "backdrop_path": "/gBjs3r2FmcmyG2chxwuVbRgWtIm.jpg",
      "adult": false,
      "overview": "The family-friendly movie explores the transformational role prayer plays in the lives of the Jordan family. Tony and Elizabeth Jordan, a middle-class couple who seemingly have it all – great jobs, a beautiful daughter, their dream home. But appearances can be deceiving. In reality, the Jordan’s marriage has become a war zone and their daughter is collateral damage. With the help of Miss Clara, an older, wiser woman, Elizabeth discovers she can start fighting for her family instead of against them. Through a newly energized faith, Elizabeth and Tony’s real enemy doesn’t have a prayer.",
      "release_date": "2015-08-28"
    },
    {
      "vote_count": 99,
      "id": 72478,
      "video": false,
      "vote_average": 7.6,
      "title": "@Suicide Room",
      "popularity": 1.542407,
      "poster_path": "/6BUyvSeRG4FAkv0jo5FhJ87gHMw.jpg",
      "original_language": "pl",
      "original_title": "Sala samobójców",
      "genre_ids": [
        16,
        53,
        18
      ],
      "backdrop_path": "/g5AkLWjbxDeYgzxLwlAu0S9sgXy.jpg",
      "adult": false,
      "overview": "Dominik is an ordinary boy. He's got loads of friends, the hottest girl in school, rich parents and money to spend on brand-name clothes. But one innocent kiss with a mate changes everything. He begins to isolate himself from the outside world, spending all his time on his computer. He meets an anonymous girl who introduces him to the \"suicide room\", a place from which there is no escape. Caught in a trap woven of his own emotions, Dominik becomes entangled in a web of intrigue and gradually loses what he cherishes most.",
      "release_date": "2011-03-04"
    }
  ]
}
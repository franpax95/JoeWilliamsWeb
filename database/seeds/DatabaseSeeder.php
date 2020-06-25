<?php

use Illuminate\Database\Seeder;
use App\Expositions;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $coverCunt = json_encode(
            array(
                "cover" => "/image/covercunt.jpg",
                "img1"  => "/image/covercunt.jpg",
                "img2"  => "/image/cuntcover.jpg",
                "img3"  => "/image/cunt15.jpg",
                "img4"  => "/image/cunt13.jpg",
                "img5"  => "/image/cunt18.jpg",
                "img6"  => "/image/cunt20.jpg",
                "img7"  => "/image/cunt27.jpg",
                "img8"  => "/image/cunt32.jpg",
                "img9"  => "/image/cunt35.jpg"
            )
        );
        Expositions::create([
            'title' => "Let's talk about the c-word",
            'description' => "In this book I dive into the history of one of the most most offensive words. In the English language, the word cunt. Detailing the complex history and evolution of the word. The book also includes an interview with Rachel Miles a Senior Lecturer in VIsual Culture at UWE, where we have and in depth conversation on the words role in modern culture and how it has come to have so much power.",
            'type' => "Editorial Design & Custom Bookbinding",
            'details' => "The rose on the books cover has been laser cut into the card and the book's spine is made from sandpaper to give the book a rough texture as soon as you pick it up.",
            'img' =>  $coverCunt,
        ]);



        $velvet = json_encode(
            array(
                "cover"=> "/image/velvet000675.jpg",
                "img1"=> "/image/velvet000675.jpg",
                "img2"=> "/image/velvet000682.jpg",
                "img3"=> "",
                "img4"=> "/image/velvet000677.jpg",
                "img5"=> "/image/velvet000673.jpg",
                "img6"=> ""
            )
        );
        Expositions::create([
            'title' => "Velvet",
            'description' => "Concept clothing for creatives. \n velvet is aN ONGOING collaboration with local businesses to create hand made garments. using organic fabrics & natural dyeS WE ARE HOPING FOR A SUSTAINABLE ALTERNATIVE TO THE FASHION INDUSTRIALISED FASHION INDUSTRY.",
            'type' => "Art Direction & Fashion Design",
            'details' => "",
            'img' => $velvet
        ]);



        $sync = json_encode(
            array(
                "cover" => "/image/sync2.jpg",
                "img1"  => "/image/sync2.jpg"
            )
        );
        Expositions::create([
            'title' => "Sync",
            'description' => "A scupture representing a visual analisis of human synchronization through rhythm in a confined space. The sculpture consists of a pattern created by peoples movements in response to the sounds they hear. The pattern is divided in to specific time frames that have each been screen printed on layers of perspex, as the rythm progresses you can see the fluctuations of synchronised movements move through the crowd. The layers are then held together by two concrete blocks that emulate the walls of this confined space.",
            'type' => "Editorial Design & Custom Bookbinding",
            'details' => "",
            'img' => $sync,
        ]);



        $finalFlamingo = json_encode(
            array(
                "cover" => "/image/Final_flamingo_cover.jpg",
                "img1"  => "/image/Final_flamingo_cover.jpg",
                "img2"  => "/image/Final_flamingo_the_fucking_final_one4.jpg",
                "img3"  => "/image/Final_flamingo_the_fucking_final_one10.jpg",
                "img4"  => "/image/Final_flamingo_the_fucking_final_one14.jpg",
                "img5"  => "/image/Final_flamingo_the_fucking_final_one16.jpg",
                "img6"  => "/image/Final_flamingo_the_fucking_final_one19.jpg",
                // "img7"  => "",
                // "img8"  => ""
            )
        );
        Expositions::create([
            'title' => "Fluttering Flamingo",
            'description' => "A publication analysing the flamingos flight patterns and yearly migration. This is a fascinating moment in nature as these birds are capable of migrating miles, at the exact date every year, from all over the world to lake Nakuru.",
            'type' => "Editorial Design & Custom Bookbinding",
            'details' => "The publication also features fold out pages showing the birds flight formations. \n These pages are designed to mimic the flamingos wing span.",
            'img' => $finalFlamingo,
        ]);



        $synchronicity = json_encode(
            array(
                "cover" => "/image/syncvid.jpg",
                "img1"  => "/image/syncvid.jpg"
            )
        );
        Expositions::create([
            'title' => "Synchronicity",
            'description' => "A moving image piece on Carl Jung's theory of Synchronicity. \n Many of my projects stem from his research in to this subject. There is still so much we dont know when ir comes to the subconcious connections humans have with eachother and this fascinates me. Small details in movements and behaviour that sometimes go unnoticed can often stem from a depp and complex proccess in our subconcious.",
            'type' => "Moving Image & Sound Design",
            'details' => "",
            'img' => $synchronicity,
        ]);



        $laraLogan = json_encode(
            array(
                "cover" => "/image/laracover.jpg",
                "img1"  => "/image/laracover.jpg",
                "img2"  => "/image/LARA8.jpg",
                "img3"  => "/image/LARA9.jpg",
                "img4"  => "/image/LARA10.jpg",
                "img5"  => "/image/LARA11.jpg",
                // "img6"  => ""
            )
        );
        Expositions::create([
            'title' => "The Lara Logan Case",
            'description' => "On Feb. 11, 2011 the journalist Lara Logan had suffered a brutal sexual assault by Egyptian men in the middle of hundreds of people during the anti-Mubarak celebration in the Tahrir Square. The blame for what  had happened has been thrown at many different groups, but this publication takes a look at the situation from many different angles, analysing mob mentality and previous reference groups to try and understand why the mob of 200 men began this public attack.",
            'type' => "Editorial Design",
            'details' => "Writing by Elaine Replogle",
            'img' => $laraLogan,
        ]);



        $darkElf = json_encode(
            array(
                "cover" => "/image/ira.jpg",
                "img1"  => "/image/ira.jpg"
            )
        );
        Expositions::create([
            'title' => "The Dark Elf",
            'description' => "Photography colaboration with makeup artist Ira Kamu.",
            'type' => "",
            'details' => "Portrait Photography.",
            'img' => $darkElf,
        ]);

        $humanHerd = json_encode(
            array(
                "cover"=> "/image/herd_front_cover.jpg",
                "img1" => "/image/herd_front_cover.jpg",
                "img2" => "/image/herd8.jpg",
                "img3" => "/image/herd_red_1.jpg",
                "img4" => "/image/herd15.jpg",
                "img5" => "/image/herd20.jpg",
                "img6" => "/image/herd_red.jpg",
                "img7"=> "/image/herd_red_2.jpg"
            )
        );
        Expositions::create([
            'title' => "Human Herd Mentality",
            'description' => "A publication exploring herd mentality within humans. Analysing certain situations where people, once becoming part of a large group,  lose their individuality and their power to reason for themselves. These situations result in the individuals behaviour becoming out of the ordinary.",
            'type' => "Editorial Design",
            'details' => "",
            'img' =>  $humanHerd,
        ]);



        // $lethalCombination = json_encode(
        //     array(
        //         "cover" => "/image/lethal_combination.jpg",
        //         "img1"  => "/image/lethal_combination.jpg"
        //     )
        // );
        // Expositions::create([
        //     'title' => "Lethal Combination",
        //     'description' => "",
        //     'type' => "Custom typeface for logo design.",
        //     'details' => "",
        //     'img' =>  $lethalCombination
        // ]);


        // $readNews = json_encode(
        //     array(
        //         "cover"=> "/image/news_cover.jpg",
        //         "img1"=> "/image/news.jpg",
        //         "img2"=> "/image/news2.jpg",
        //         "img3"=> "/image/news4.jpg",
        //         "img4"=> "/image/news8.jpg",
        //         "img5"=> "/image/news11.jpg",
        //         "img6"=> "/image/news12.jpg",
        //         "img7"=> "/image/news15.jpg"
        //     )
        // );
        // Expositions::create([
        //     'title' => "I read the news today",
        //     'description' => "We live in a world with so many constant news updates from so many sources its hard to keep track and judge which problems are important, weather it be a local problem or global. The idea behind this publication is to highlight important news articles over one summer and curate them into a manageable information for the reader. Non bias news from local to global hopefully giving up a better understanding of the things that have happened in this time",
        //     'type' => "Editorial Design & Research",
        //     'details' => "",
        //     'img' => $readNews,
        // ]);

                // $jam = json_encode(
        //     array(
        //         "cover" => "/image/jamcover.png",
        //         "img1"  => "/image/jamcover.png"
        //     )
        // );
        // Expositions::create([
        //     'title' => "JAM",
        //     'description' => "A short documentary on Bristols most vibrant jazz bars LEFTBANK. Every Thursday they hold a jam night where different musicians come together to create unique music. Most of the people who come to play have never met and are completely improvising, this creates an exciting atmosphere as each person brings a their own flair to the group creating a different music every night. We also designed a casing for the documentary as seen here.",
        //     'type' => "",
        //     'details' => "",
        //     'img' => $jam,
        // ]);
    }
}

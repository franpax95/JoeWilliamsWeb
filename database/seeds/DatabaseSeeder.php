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
                "cover" => "/image/covercunt.png",
                "img1"  => "/image/covercunt.png",
                "img2"  => "/image/cuntcover.jpg",
                "img3"  => "/image/cunt13.jpg",
                "img4"  => "/image/cunt15.jpg",
                "img5"  => "/image/cunt18.jpg",
                "img6"  => "/image/cunt20.jpg",
                "img7"  => "/image/cunt27.jpg",
                "img8"  => "/image/cunt35.jpg"
            )
        );
        Expositions::create([
            'title' => "Let's talk about the c-word",
            'description' => "The word I chose was “cunt”. This word interested me as it is known to be one of the most offensive words in the English language. I wanted to find out where this word came from and why it is considered one of the worst. In this book I dive into the history of the word. Detailing the first time it appears in literature, the first time it appears on TV and today’s public opinion of word. The book also includes an interview with UWE’s  Senior Lecturer in Visual Culture Rachel Miles, where we have an in depth conversation on the words role in modern culture and how it has come to have so much power.",
            'type' => "Editorial Design & Custom Bookbinding",
            'details' => "The rose on the books cover has been laser cut into the card and the book's spine is made from sandpaper to give the book a rough texture as soon as you pick it up.",
            'img' =>  $coverCunt,
        ]);


        $finalFlamingo = json_encode(
            array(
                "cover" => "/image/Final_flamingo_cover.jpg",
                "img1"  => "/image/Final_flamingo_6.jpg",
                "img2"  => "/image/Final_flamingo_2.jpg",
                "img3"  => "/image/Final_flamingo_1.jpg",
                "img4"  => "/image/Final_flamingo_3.jpg",
                "img5"  => "/image/Final_flamingo_4.jpg",
                "img6"  => "/image/Final_flamingo_5.jpg",
                "img7"  => "/image/Final_flamingo_cover.jpg"
            )
        );
        Expositions::create([
            'title' => "Fluttering Flamingo",
            'description' => "A publication analysing the flamingos flight patterns and yearly migration. This is a fascinating moment in nature as these birds migrate from all over the world to lake Nakuru at the exact date every year.",
            'type' => "Editorial Design & Custom Bookbinding",
            'details' => "The publication also features fold out pages showing the birds flight formations. These pages are designed to mimic the flamingos wing span.",
            'img' => $finalFlamingo,
        ]);


        $laraLogan = json_encode(
            array(
                "cover" => "/image/laracover.png",
                "img1"  => "/image/laracover.png",
                "img2"  => "/image/LARA3.jpg",
                "img3"  => "/image/LARA5.jpg",
                "img4"  => "/image/LARA8.jpg",
                "img5"  => "/image/LARA9.jpg",
                "img6"  => "/image/LARA10.jpg",
                "img7"  => "/image/LARA11.jpg"
            )
        );
        Expositions::create([
            'title' => "The Lara Logan Case",
            'description' => "On Feb. 11, 2011 the journalist Lara Logan had suffered a brutal sexual assault by Egyptian men in the middle of hundreds of people during the anti-Mubarak celebration in the Tahrir Square. The blame for what  had happened has been thrown at many different groups, but this publication takes a look at the situation from many different angles, analysing mob mentality and previous reference groups to try and understand why the mob of 200 men began this public attack.",
            'type' => "Editorial Design",
            'details' => "Writing by Elaine Replogle",
            'img' => $laraLogan,
        ]);


        $synchronicity = json_encode(
            array(
                "cover" => "/image/syncvid.png",
                "img1"  => "/image/syncvid.png"
            )
        );
        Expositions::create([
            'title' => "Synchronicity",
            'description' => "An experimental video on Carl Jung's theory of Synchronicity.",
            'type' => "Videography & Sound Design",
            'details' => "",
            'img' => $synchronicity,
        ]);


        $humanHerd = json_encode(
            array(
                "cover" => "/image/herd_front_cover.jpg",
                "img1"  => "/image/herd_front_cover.jpg",
                "img2"  => "/image/herd8.jpg",
                "img3"  => "/image/herd_red_1.jpg",
                "img4"  => "/image/herd15.jpg",
                "img5"  => "/image/herd_red_2.jpg",
                "img6"  => "/image/herd20.jpg",
                "img7"  => "/image/herd_red.jpg"
            )
        );
        Expositions::create([
            'title' => "Human Herd Mentality",
            'description' => "A publication exploring herd mentality within humans. Analysing certain situations where people, once becoming part of a large group,  lose their individuality and their power to reason for themselves. These situations result in the individuals behaviour becoming out of the ordinary.",
            'type' => "Editorial Design",
            'details' => "",
            'img' =>  $humanHerd,
        ]);


        $sync = json_encode(
            array(
                "cover" => "/image/sync2.jpg",
                "img1"  => "/image/sync2.jpg"
            )
        );
        Expositions::create([
            'title' => "Sync",
            'description' => "A project analysing human synchronization through rhythm in a confined space./r/n/r/nThe sculpture consists of a pattern created by peoples movements in response to the sounds they hear. Each layer represents a specific time frame within a confined space and as the sounds intensify peoples movements start to synchronise. The layers are then individually screen printed on to a layer of perspex and held together by two concrete blocks that emulate the walls of this confined space. This allows us to see how peoples movements expand through the group as a kind of domino effect depending on the sounds they hear.",
            'type' => "Conceptual Design, Sculpture, Screen Printing, Concrete work & Metal Work",
            'details' => "",
            'img' => $sync,
        ]);


        $jam = json_encode(
            array(
                "cover" => "/image/jamcover.png",
                "img1"  => "/image/jamcover.png"
            )
        );
        Expositions::create([
            'title' => "JAM",
            'description' => "A short documentary on Bristols most vibrant jazz bars LEFTBANK./r/nEvery Thursday they hold a jam night where different musicians come together to create unique music. Most of the people who come to play have never met and are completely improvising, this creates an exciting atmosphere as each person brings a their own flair to the group creating a different music every night./r/nWe also designed a casing for the documentary as seen here.",
            'type' => "",
            'details' => "",
            'img' => $jam,
        ]);


        $darkElf = json_encode(
            array(
                "cover" => "/image/ira.jpg",
                "img1"  => "/image/ira.jpg"
            )
        );
        Expositions::create([
            'title' => "The Dark Elf",
            'description' => "",
            'type' => "",
            'details' => "Portrait Photography.",
            'img' => $darkElf,
        ]);


        $lethalCombination = json_encode(
            array(
                "cover" => "/image/lethal_combination.jpg",
                "img1"  => "/image/lethal_combination.jpg"
            )
        );
        Expositions::create([
            'title' => "Lethal Combination",
            'description' => "",
            'type' => "Custom typeface for logo design.",
            'details' => "",
            'img' =>  $lethalCombination
        ]);


        $readNews = json_encode(
            array(
                "cover" => "/image/news_cover.jpg",
                "img1"  => "/image/news.jpg",
                "img2"  => "/image/news2.jpg",
                "img3"  => "/image/news4.jpg",
                "img4"  => "/image/news8.jpg",
                "img5"  => "/image/news11.jpg",
                "img6"  => "/image/news12.jpg",
                "img7"  => "/image/news15.jpg"
            )
        );
        Expositions::create([
            'title' => "I read the news today",
            'description' => "We live in a world with so many constant news updates from so many sources its hard to keep track and judge which problems are important, weather it be a local problem or global./r/nThe idea behind this publication is to highlight important news articles over one summer and curate them into a manageable information for the reader. Non bias news from local to global hopefully giving up a better understanding of the things that have happened in this time",
            'type' => "Editorial Design & Research",
            'details' => "",
            'img' => $readNews,
        ]);


        $velvet = json_encode(
            array(
                "cover" => "/image/velvet000675.jpg",
                "img1"  => "/image/velvet000675.jpg",
                "img2"  => "/image/velvet000673.jpg",
                "img3"  => "/image/velvet000682.jpg",
                "img4"  => "/image/velvet000676.jpg",
                "img5"  => "/image/velvet000677.jpg",
                "img6"  => "/image/velvet000678.jpg",
                "img7"  => "/image/velvet000684.jpg",
                "img8"  => "/image/velvet000685.jpg"
            )
        );
        Expositions::create([
            'title' => "Velvet",
            'description' => "Directing a personal project in collaboration with some friends where we make hand made garments unique to the buyers needs trying to fight the idea of quality in mass produced objects.",
            'type' => "Art Direction & Fashion Design",
            'details' => "",
            'img' => $velvet,
        ]);
    }
}

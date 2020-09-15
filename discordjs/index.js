const Discord = require('discord.js');
const client = new Discord.Client();
const {
    prefix,
    token,
} = require('./config.json');
client.once('ready', () => {
    console.log('Bot Started!');
});

client.login(token);

const resOne = [
    'An explosion on the battlefield in France was heard in England.',
    'The Government tried to control the flow of information from the frontline during the war and journalists were banned from reporting.',
    '12 million letters were delivered to the frontline every week.',
    'Plastic surgery was invented because of WW1. One of the earliest examples of plastic surgery came during World War I when a surgeon by the name of Harold Gillies helped shrapnel victims with terrible facial injuries.',
    'The youngest British soldier in WW1 was just 12 years old.',
    'Blood banks were developed during World War I. It was during WW1 that the routine use of blood transfusion was used to treat wounded soldiers.',
    '9 out of 10 British soldiers survived the trenches. The same could not be said about French, German, or most other soldiers.',
    'Army generals had to be banned from going ‘over the top’. One common stereotype is that ordinary solders were used by the higher ups – lions led by donkeys as the saying goes. The donkeys being the incompetent generals who didn’t spend any time on the frontline while thousands of solders – the lions – were killed. Actually, so many British generals wanted to fight and they had to be banned from going over the top because they were being killed and the experience of a general was too important to lose.',
    'Europe was divided into The Triple Alliance and The Triple Entente in 1914. This formed the basis of alliances during the war.',
    'Despite most of the war being in France and Russia, the war originated from the Balkan region. Specifically, Serbian nationalists were unhappy with Austro-Hungarian influence in the Balkans.',
    // 10
    'Germany initially operated under a tactic called \'The Schlieffen Plan\'. This plan was to quickly knock out France and then face Russia alone. The failure of this plan at the First Battle of the Marne in 1914 led to the Germans abandoning it in favor of trench warfare.',
    'In 1914, at Tannenberg, Poland, the Germans delivered a decisive defeat onto the Russian enemy, who took over 140,000 casualties (including their general) and almost lost its entire Second Army. The Russians would never recover from this defeat.',
    'At the farthest point, the Germans were only 43 miles from Paris. However, the German First Army split up from the rest of the armies, thus opening a gap in the line. The Germans were then forced to retreat.',
    'Despite Russia\'s overwhelming army, they never reached German territory after Tannenberg (Tannenberg was a battle that took place in 1914 that resulted in a victory for the Germans).',
    'The longest battle of the entire war was the Battle of Verdun. It lasted from February to December of 1916. German Chief of Staff Erich von Falkenhayn initiated the attack not only for its strategic position, but also as a blow to French morale, because the fort was a historical symbol.',
    'The single bloodiest day of the entire war occured on August 22, 1914, at the Battle of the Frontiers. The French, who were using Napoleonic tactics (marching in large rows) were easily mowed down by modern artillery and machine gun fire.',
    'World War One is also known as The War to End All Wars and The Great War.',
    'After the war, four major empires fell. They were the German Empire, the Russian Empire, the Ottoman Empire, and the Austro-Hungarian Empire.',
    'Despite being known as one of the major three powers of the Allies, the United States joined the war in mid-1917 and its troops were only arriving on mass by mid-1918.',
    'In the spring of 1916, the Russians launched an offensive known as The Brusilov Offensive, named after its creator, General Alexei Brusilov. It did very well, but soon ran out of momentum. This caused Romania to join the war on Russia\'s side. However, had Romania stayed neutral (and not let the enemy take its oil fields) or joined earlier (to help while the Russians were attacking) they could have knocked Austria-Hungary out of the war.',
    // 20
    'German U-boats (submarines) sunk a total of 6,596 ships in the duration of WW1. Losses to U-Boats were significantly reduced following the introduction of the convoy system (ships sailing in large groups.',
    'About 30 different types of poisonous gasses were used during the war. The most famous of the gasses were Mustard Gas and Chlorine Gas.',
    'When the Americans entered the war, they brought shotguns. The Germans complained that they caused unnecessary suffering and threatened to kill any American soldier caught with a shotgun when surrendering. This was ironic, because the Germans introduced chemical weapons and flamethrowers, which could also cause suffering.',
    'Manfred Albrecht Freiherr von Richthofen of Germany was hailed most successful pilot. He is also known as the Red Baron and was known to be flying a brightly coloured biplane. He was killed in 1918.',
    'The most successful sniper of the entire war was Francis Peghamagabow, a Canadian First Nations soldier who totaled 378 confirmed kills.',
    'The French switched chief-of-staffs three times during the war. The three of them were Joseph Joffre (1914-1916), Robert Nivelle (1916-1917), and Phillipe Petain (1917-1918). This rank was different from the Allied Supreme Commander, who was a French marshal named Ferdinand Foch, who had the role from early 1918 until the end of the war.',
    'In the Battle of the Somme River, tanks were used for the first time in history. However, they tended to break down and stop working very often, so they didn\'t have a huge impact on the battle. However, they would heavily change the way future battles would be fought.',
    'Woodrow Wilson, the president of the United States, used the slogan "He kept us out of the war" for his second term campaign. This would prove to be ironic because he would bring America into the war.',
    'The Ottoman Empire, in 1914, was split on whether or not to join the war, and on what side. However, pro-Central Powers Minister of War Enver Pasha decided to take a small convoy of ships and attack Russia, effectively forcing the country into a war on the Central Powers side.',
    'In 1915, the Entente Powers (Britian, France, etc.) tried to take the Turkish ports of Gallipoli in the Dardanelles Strait. However, a lack of judgement by High Command resulted in continuous failed attacks, and soon, this front would develop into trench warfare like the other fronts.',
    // 30
    'The First Lord of the Admiralty (leader of the navy) was blamed for the failure at the Gallipoli naval landings. He became very unpopular in the British public. Interestingly enough, this man\'s name was Winston Churchill, who would play a much more positive role in the Second World War.',
    'The Italians, who had originally formed an alliance with Germany and Austria-Hungary pre-war, instead joined the Entente due to promises of gaining Austro-Hungarian land after the war.',
    'On the Italian Front, a total of twelve battles took place along the Isonzo River over the course of the war.',
    'Though the war had originated between Austria-Hungary and Serbia, Serbia was knocked out of the war by 1915.',
    'On the Macedonian Front, in Greece, a five nation army was formed, of French, British, Italian, Serbian, and and Greek soldiers.',
    'The Russian tsar (king) was said to have been influenced by a wizard named Grigori Rasputin. This made him very unpopular amongst his people.',
    'By 1917, millions of Russian troops had become casualties of the war. Soon, many citizens in Russia started to riot and protest. In the February Revolution, a provisional government (a temporary government) was established under Alexander Kerensky. However, his decision to stay in the war would lead to a second uprising, the October revolution, which was led by Vladimir Lenin and the communist Bolshevik party.',
    'The Germans switched chief-of-staffs three times during the war. The three of them were Helmuth von Moltke (1914), Erich von Falkenhayn (1914-1916), and Paul von Hindenburg (1916-1918). It should be noted that Paul von Hindenburg was more of a public figure than a general. His second in command, Quartermaster General Erich Ludendorff, was the one behind most of the plans.',
    'British chief-of-staff Douglas Haig was also known as \'The Butcher\' because of his careless and considerably risky tactics.',
    'Despite popular belief, none of the helmets used in the First World War could stop the flight of a bullet. Some of the troops learned this the hard way after sticking their heads over the trenches.',
    // 40
    'The most decorated private of the entire war, Henry Tandey, was a British soldier who met Adolf Hitler in 1918. Hitler was helpless, and Tandey was ready to shoot him. However, he spared Hitler\'s life.',
    'In 1916, a British soldier smuggled a soccer ball (football) into the trenches. On the day that the troops were to rush the enemy trenches at the Somme, the troops bet each other lightheartedly that whoever got the ball into the German trench would be bought wine. This forshadowed the bloody day that was to come,',
    'During the Christmas of 1914, British and German troops stopped firing at each other and became friends for a day. They met in no-man\'s land and played different games. This was not the case for the entire front; only parts of it enjoyed the "Christmas Truce". Particularly, the French did not share such a friendly view towards the enemy. After all, the Germans were invading their country.',
    'During the war, small and quick men were chosen to be runners. Because telephone wire was always being cut by enemy artillery, the role of a runner was to deliver important messages to different divisional or regimental commanders. Sometimes, dogs or even birds would also be used for this role.',
    'Fake objects placed in no man\'s land was a common occurence. Sometimes, one side would cut down a tree and replace it with a fake replica of it, designed so that a soldier could fit in. This way, a soldier could spy (or fire) on enemies safely.',
    'At the Battle of Mons in 1914, the vastly outnumbered British Expeditionary Force was reported to have seen angels and ghosts of men from medieval times helping them defend and firing volleys of arrows at the advancing Germans.',
    'In 1918, the Germans launched a spring offensive that resulted in the Germans re-capturing the land near the Marne river. They were 50 miles from Paris. They hadn\'t been this close since 1914. However, by this time, the Germans were in no spape to fight anymore due to a poor economy.',
    'It was in WW1 that aircraft developed. Previously aircraft were only used for reconnaissance and scouting purposes. However, engineers managed to attack machine guns to planes to allow it to become a fighter, or a payload to it to turn it into a bomber.',
    'The Germans constantly performed zeppelin (large airships powered by hydrogen gas) air raids on major cities such as Paris and London. At first, they terrified many civilians, but later on in the war, the British developed incendiary bullets to fire from fighter planes, which would burn the zeppelin because the hydrogen used to fill it was extremely flammable.',
    'On November 11, 1918, at 11AM, the Germans surrendered. At 10:59 AM, Henry Gunther, an American soldier, was killed charging a machine gun nest. He was warned by the Germans to stop. This made him the last man to die in the war.',
    // 50
    'Prisoners of war were often treated better if they were officers. As a result, many soldiers would take the uniforms of dead officers before being captured in hopes of better living conditions. Generally, the higher your rank the better you were treated as a prisoner in WW1.',
    'After the failure at Gallipoli, the allies needed to evacuate. The troops developed a piece of technology called the drip gun that would fire in intervals due to a bucket of water that would put pressure on the trigger. Using this, they were able to evacuate Gallipoli with not one man lost.',
];

const resTwo = [
    'The first German serviceman killed in the war was killed by the Japanese. Note that in the Second World War, the Germans and Japanese were allies. This occured because the Germans used to support Japan\'s enemy, China, and the German killed was an observer of the battle.',
    'The first American serviceman killed in the war was killed by the Russians. Note that in the Second World War, the Americans and Russians were allies. This occured because the Americans had sent an embassy to Finland where they were fighting the Soviets, and one of the men was killed by a Soviet bombing campaign.',
    'More US servicemen died in the Air Corps that the Marine Corps. It was estimated that a serviceman in the Air Corps had a 71% chance of dying.',
    'Polish Catholic midwife Stanisława Leszczyńska delivered 3,000 babies at the Auschwitz concentration camp during the Holocaust in occupied Poland. 2500 of them did not survive.',
    'In World War II, British soldiers got a ration of three sheets of toilet paper a day. Americans got 22.',
    'In 1941, more than 3 million cars were manufactured in the US. Only 139 more were made during the entire war.',
    'Four of every five German soldiers killed in the war died on the Eastern Front. It was estimated that every eight seconds a German died.',
    'Only 20% of the males born in the Soviet Union in 1923 survived the war. The total number of males born in 1923 in the Soviet Union was 3.4M. This meant that 680,000 of those men remained by 1945.',
    'In World War II, the youngest serviceman in the US military was Calvin Graham — age 12. Graham lied about his age when he enlisted in the US Navy. His real age was not discovered after he was wounded.',
    'German U-Boats were very widely used in both World Wars. However, in the Second World war, only one out of every four men serving on U-boats survived the war.',
    // 10
    'The Siege of Stalingrad resulted in more Russian deaths (military and civilian) than the US and Britain sustained (combined) in all of World War II. Note that the Battle of Stalingrad was the single longest battle of the war.',
    'To avoid using the German sounding name ‘hamburger’ during World War II, Americans used the name ‘Liberty Steak. The Americans also renamed a lot of other items to make them sound less German.',
    'Adolf Hitler was the Leader of Nazi Germany. Oddly enough, Adolf Hitler’s nephew, William Hitler, served in the US Navy during World War II.',
    'The mortality rate for POWs (Prisoners of War) in Russian camps (also known as gulags) was 85%. This was due to malnutrition and poor living conditions. Many German troops committed suicide to avoid being captured.',
    'The first bomb dropped on Berlin by the Allies killed the only elephant in the Berlin Zoo. Interestingly enough, it was also the only living thing killed. No humans or other animals were killed.',
    'The United States dropped 2 atomic bombs on the Japanese cities of Hiroshima and Nagasaki. Had the Japanese not surrendered, the third city targeted would have been Tokyo.',
    'Hiroo Onoda, an Imperial Japanese Army intelligence officer who fought in World War II, never surrendered in 1945. Until 1974, for almost 30 years, he held his position in the Philippines. His former commander traveled from Japan to personally issue orders relieving him from duty in 1974.',
    'Total casualties for World War II were between 50 and 70 million people, 80% of who came form only four countries — Russia, China, Germany, and Poland. Over 50% of the casualties were civilians, with the majority of those being women and children.',
    'George HW Bush, the future President of the United States, narrowly avoided a diabolical end when his plane was shot down during a bombing raid against Japan. He was picked up by the Allies, but all the other men on the same raid were captured by Japanese officers who proceeded to torture, execute, cook and eat them, in one of the greatest war crimes of the whole conflict.',
    'Konstanz, a German city close to the Swiss border, decided to keep all its lights on as normal at nighttime, rather than enforcing the usual blackout. The bluff paid off, as Allied pilots assumed it actually was in Switzerland (which was neutral), and spared it from harm.',
    // 20
    'Adrian Carton de Wiart, a flamboyant figure who had already seen action in the Boer War and World War One, was shot in the face, skull, leg and hip, losing his left eye and one hand in the process. Yet, he survived.',
    'In a narrow road in the Ardennes Forest in Belgium, you can see (even today) a massive line of old cars that the US had left behind after WW2.',
    'Juan Pujol Garcia was a double-agent for the British, and specialised in feeding the Germans false information. While his Nazi bosses believed he lived in Britain, Garcia actually went to Portugal and just made-up his "reports" from the UK, despite knowing very little about British life and culture.',
    'The Australian ship SS Wien was sunk in 1918. A few years later it was salvaged and put back into service, by Italy, and in WW2 it served as a hospital ship for Mussolini\'s forces. It was attacked by the Allies and sunk, and became the only ship to have been sunk in both World Wars.',
    'German scientists were genuinely interested in building a "sun gun", which would consist of a vast magnifying glass in space. The glass was intended to concentrate beams of sunlight to scorch cities and boil the seas. However, it was estimated to take over a century to create.',
    'Doctors were so concerned about a man of Churchill\'s age and condition being flown at high altitudes that a special, pressurized life pod was created to "protect the precious bulk of Winston Churchill". However, it was never used because it was too large to fit in planes.',
    'The highest ranking casualty was the American Lieutenant General Lesley McNair, killed in friendly fire bombing from the US Army Air Corps. Lieutenant General Simon Bolivar Buckner ties for this achievement after being killed on Okinawa, Japan.',
    'Oddly enough, When Pearl Harbour was attacked by Japan in 1941, the name of US Navy Command was CINCUS (an acronym pronounced ‘sink us’). The soldiers of the US 45th Infantry Division wore a Swastika on their shoulder. At the same time, Hitler’s private train was named ‘Amerika’. All three were quickly changed afterwards.',
    'Nearing the end of the war, Hitler started to distrust many of his own generals. He executed eighty-four of his generals, mainly for alleged involvement in plots against him.',
    'The German submarine U-120 sunk when its toilet malfunctioned. The men noticed that the toilet was not working, and when the engineer tried fixing it, he opened the wrong valve, causing water to flood into the submarine, sinking it.',
    // 30
    'The infamous Nazi salute was holding the arm at a stiff angle straight in front of you. It was based on the Italian Fascist salute, which itself was based on the salute of the ancient Romans. Oddly enough there was no record of the Romans ever using this salute.',
    'Japan paid 1 million yen to a team of scientists that promised they could create a "death ray" that would use wave electric power to kill humans standing miles away, drawing on the innovations of Nikola Tesla.',
    'British Corporal Bob Roberts was charged with taking the surrender of one of the tallest soldiers in the German Army. Standing at 7\' 6", Jakob Nacken towered over Roberts (5\' 3") as he accepted his surrender.',
    'Private First Class Charley Havlat returned to his parents\' native home of Czechoslovakia while serving his country. On a dirt road just 12 miles in to the country, on May 7, 1945, Havlat took a bullet to the head and was killed instantly. A ceasefire was to happen minutes after, making him the last soldier to die in WW2.',
    'Denmark was knocked out of the war in just 6 hours. This was the quickest surrender of the entire war.',
    'In the Battle of France, Germany\'s casualties numbered 100,000 men. This was only one-third of the casualties taken at the Battle of Verdun in WW1.',
    'In the Battle of France, the British Expeditionary Force was pushed back and surrounded at the French port city of Dunkirk. However, the Germans just suddenly stopped advancing, a fatal error, because it allowed 300,000 British, French, and Belgian troops to escape across the English channel.',
    'Though Nazi scientists worked to develop weaponized versions of diseases such as typhoid and cholera, Hitler discouraged the use of offensive biological weapons in battle, possibly because of his experiences with chemical weapons during WW1.',
    'One type of biological weapon that the Nazis considered unleashing on their enemies was an army of potato beetles, which they thought could be dropped on England to destroy its crops and cause widespread famine.',
    'American soldier John R. McKinney was on guard duty in the Philippines when he was attacked in May 1945 by a large group of Japanese fighters. Over 36 minutes, he fought off the men using his skills with an M1 rifle, then hand-to-hand combat, ultimately killing 38 of their troops.',
    // 40
    'The period of the war between the German invasion of Poland and the Battle of France was also known as the Phony War.',
    'Korean soldier Yang Kyoungjong, who had fought for the Japanese, was then captured and force to fight for the Soviets, and later the Germans. When the Allied forces landed in France, Yang was captured by the U.S. Army.',
    '"The Mad Piper” Bill Millin was the only bagpiper to land on the beach in Normandy. While men fell around him, he played his pipes throughout the battle. A group of captured German snipers was asked why they hadn’t shot him. They replied that they thought he’d gone insane and felt bad for him.',
    'German interrogator Hanns Scharff was against using physical torture on POWs. Instead he would take them out to lunch, on nature walks and to swimming pools, where they would reveal information on their own.',
    'When World War II broke out, all the venomous animals of the London Zoo were killed to remove the possibility of having dangerous animals escape if the Zoo were bombed.',
    'The ceasefire and surrender terms of France in 1940 were poetically signed in the same railway car that the Germans had signed an armistice 22 years ago to end WW1. Hitler intended this as an "undoing" of Germany\'s defeat in WW1.',
    'Emil Hacha, who was in 1939 President of Czechoslovakia, suffered a heart attack after he was informed by Hitler & Göring of the imminent invasion of his country and threatened to bomb the capital if he didn’t cooperate and was kept awake by injections to sign the surrender.',
    'During the Battle of the Aleutian Islands, US and Canadian troops mistook each other for the Japanese, who had abandoned the island long ago. It resulted in the US troops fighting its ally, Canada.',
    'There was a Polish bear, named Wojtek, who gained the rank of Corporal, was taught to salute, wrestled with the men, drank and smoked cigarettes and helped the front-line troops by carrying ammo.',
    'The Dutch warship, Abraham Crijnssen, was disguised as a tropical island to escape detection by the Japanese bombers. It worked.',
    // 50
];

const resThree = [
    'The sport of badminton was initially called “Poona”.',
    'Anna Kopchovsky, the first woman to cycle around the world in 1894, had only learned how to cycle a few days before she set off. She covered the entire distance in 15 months and received a reward of 10,000 dollars.',
    'The 2022 World Soccer Championship will be opened in Lusail (Qatar), a city which did not exist till recently.',
    'During the Olympic Games in China, Usain Bolt ate only chicken nuggets, as it was the only meal he recognized from home. Ultimately, he won three gold medals with this diet.',
    'During the 2002 Soccer World Cup, Ahn Jung-hwan from South Korea scored a goal against Italy in injury time, knocking the Italians out of the World Cup. The next day, his contract with his Italian home club was terminated because the owner said he could not pay the person who had ruined Italian football.',
    'The boxing ring is called a “ring” because it used to be round. Instead of its present form, the spectators used to stand in a circle around the fighters when the sport first became popular.',
    'The world record for the most consecutive push-ups was set in 1980 by Minoru Yoshida from Japan who managed to do 10,507 in a row.',
    'Among the 30 fastest 100-meter sprints in the history of the sport, there are only nine that are not related to doping. All nine runs were completed by Usain Bolt.',
    'Each year about 100 million bikes are produced worldwide.',
    'James Fixx, the creator of the word “jogging” died from a heart attack while jogging.',
    // 10
    '“Fox tossing” was a popular sport in the 16th century in which two people held a 23-foot-long cloth on both sides and then pulled it tight as soon as a fox ran over the cloth so that it flew into the air. The game continued until the animal broke its bones when it hit the ground and was then killed by a hunter.',
    'Professional US swimmer Michael Phelps has won more gold medals than 80 percent of all countries in the history of the Olympic Games.',
    'For car races, Nissan only uses the number 23 on their vehicles, since in Japanese number two is pronounced as “ni” and three as “san”. Together this gives “ni-san”.',
    'During the 1904 Summer Olympics in St. Louis, the American Frederick Lorz was the first to reach the finish line of the marathon race. It turned out, however, that he had covered about half the distance by car.',
    'American professional basketball player Shaquille O’Neal scored only a single three-point shot throughout his entire professional career.',
    'From 1912 to 1948 architecture was an Olympic discipline (event).',
    'The game “Quidditch” from the Harry Potter novels is now a recognized sport in our world, with its own leagues and even regular world championships. However, instead of flying on broomsticks players run.',
    'Octopus-Wrestling was a popular trend in the sixties. A diver grapples with an octopus in shallow water and tries to bring it to the surface.',
    'Dick Hoyt and his son Rick, who is fully paralyzed, have participated in countless sporting events under the name “Team Hoyt”. The two even completed six Iron Man events together. Dick first swam 2.5 miles, pulling his son in a boat behind him, then rode a bicycle over the roads for 112 miles, before pushing him in a wheelchair for another 26.2 miles.',
    'From 2015 to 2016, Englishman Ben Smith ran 401 marathons on 401 days to raise money for the victims of bullying. With his “401 Challenge” he set a world record and covered a total of 10,506 miles.',
    // 20
    'The word “gym” comes from Greek and translates to “place of the naked.”',
    'In the history of the United States there have been 17 Americans who ran a marathon in less than two hours and ten minutes. In October 2011 this was achieved by 32 Kenyans.',
    'In 1949 a boxing match was held between boxer Gus Waldorf and a bear. The bear was given a muzzle and boxing gloves to create “fair” conditions for both fighters. In the end, however, it was the bear that won.',
    'Finland has hosted the official “Wife Carrying World Championship” since 1992. In this competition, men carry their wives as fast as possible over a long obstacle course. In the end, the winner receives his wife’s weight in beer.',
    'Gladiators in ancient Rome were exclusively fighters who fought against other humans for life and death. People fighting exclusively against animals were called “Bestiarii”.',
    'Australian rower Bobby Pearce won the 1928 Olympic Games against eight other competitors, even though he stopped during the race to let ducks pass in front of him.',
    'In Amsterdam there is a gym where you can train naked.',
    'In North Korea, basketball is played according to different rules. For example, the team loses points if it doesn’t score on free throws and a dunk scores three points instead of the usual two.',
    'In 1957 a senior woman had to be brought out of a baseball stadium after being hit in her face by a baseball. When the paramedics were carrying her out, a second ball hit her.',
    'Reinhold Messner climbed Nanga Parbat, the ninth highest mountain in the world, a total of three times. The first time, his brother died on the way up and he himself lost seven toes. He decided to climb the mountain again and was the first person to do so on his own. On his third ascent, he finally climbed the mountain in memory of his deceased brother.',
    // 30
    'The longest boxing match in the world took place on 6 April 1893 between Andy Bowen and Jack Burke. The fight went on for 110 rounds and lasted for more than seven hours. In the end, both fighters were too tired and exhausted to keep on fighting.',
    'In 2002, long-distance runner Tom Johnson competed against a horse in an 50-mile race. He ran the distance in five hours and 45 minutes, arriving ten seconds ahead of the horse.',
    'Only three years after the first football rules were laid down, the hand play was forbidden.',
    'The official length of a marathon was defined as 26,219 miles because it was exactly the length of the course at the Olympic Games in London in 1908 and not because it corresponds to the historical distance between Athens and Marathon.',
    'Miguel Indurain, five times Tour de France winner, has a resting heart rate of 28 beats per minute.',
    'In 1923, a dead rider finished first in a horse race in New York. The rider suffered a heart attack during the race and the horse carried the dead body to the finishing line.',
    'Archer Matt Stutzman holds the world record for the longest shot with a bow and arrow under Olympic conditions. He hit his mark at a distance of 930 feet. To add on to this, has no arms and therefore uses the bow with his feet.',
    'When Chinese basketball player Yao Ming first appeared for his new team in Houston, it was celebrated with 8,000 fortune cookies which were distributed to the fans.',
    'There are no reported incidents of death by dehydration in the history of world running. But there are plenty of cases of people dying because of drinking to much water.',
    'Since 1896, soccer fields in Germany have to be free of trees.',
    // 40
    'Athlete Mark Henry currently holds the world record in “5-Lift-Total”. His personal records in the five disciplines of weightlifting (snatch, clean and jerk, squat, bench press and deadlift) total  3,257.3 pounds, making him officially the strongest person ever to live.',
    'In France, the national fencing federation recognized light saber fencing as an official competitive sport in 2019. Instead of saber, foil or sword, the fighters use replicas of light sabers from Star Wars.',
    'Kirani James was the first Olympian to win a gold medal for his home country Grenada. His homeland was so proud of it that there was a huge celebration for him and he was rewarded with over 220,000 euros.',
    'Manohar Aich won Mr. Universe in 1952. He got more than 100 years old and exercised regularly at the gym until he died.',
    'In order to celebrate her 70th birthday, Kansas City native Chau Smith ran seven marathons on seven continents on seven consecutive days.',
    'One pound of muscles burns 16,300 calories per year.',
    'In the fun sport Headis, two players compete against each other following the rules of table tennis. However, the game is played with a special ball the size of a football, which may only be touched with the head.',
    'The average distance a man walks on foot during his life is four times around the world.',
    'Two days out of 365 days of the year feature no professional sports games (MLB, NBA, NHL, or NFL). These are the day before and the day after the MLB All-Star Break.',
    'The silhouette on the NBA Logo is Hall of Fame Laker Jerry West.',
    // 50
];
const resFour = [
	'Shigeru Miyamoto, the creator of Super Mario Bros. and Donkey Kong, is not allowed to bike to work because his safety is too important to Nintendo.',
	'The Nintendo character Kirby was named after John Kirby, the legal counsel for Nintendo who helped them win their lawsuit with Universal Studios in 1982. John Kirby was gifted a sailboat Christened the “Donkey Kong” and given exclusive rights to name any boat he owned “Donkey Kong".',
	'Ghostbusters: The Video Game (2009) has voice acting from all four of the original cast members (Bill Murray, Dan Aykroyd, Harold Ramis, Ernie Hudson), who helped write the script as well. Aykroyd considers it "essentially the third movie".',
	'Many American public libraries carry video games as an attempt to lure teenagers into a library. The result is more teenagers coming to the library and books are being checked out at a rate that exceeds what it was before the gamers arrived.',
	'In 2005, a glitch in World of Warcraft allowed a plague to spread in the game leading non-infected players to abandon cities while those infected were forced into quarantines.',
	'The creators of Pac-Man did not know how the game ended as it was designed to run indefinitely. It was only when Billy Mitchell finished the game, after all its internal storage ran out, that they saw how it ended.',
	'Every time Pac-Man eats a regular dot, he stops moving for one frame (1/60th of a second), slowing his progress by roughly 10% just enough for the following ghost to overtake him.',
	'PETA had a problem with the whaling segment of Assassins Creed: Black Flag. Ubisoft dismissed it saying they did not condone whaling any more than they condoned a pirate lifestyle.',
	'A \'Red Shirt Guy\' (Ian Bates) stumped a panel of World Of Warcraft developers during a Q&A at BlizzCon 2010 by asking them about an inconsistency in the lore.',
	'Nintendo Power stopped accepting the many Tetris high scores submitted by Steve Wozniak. So he reversed his name, and Evets Kainzow was printed.',
	// 10
	'Grand Theft Auto was originally a racing game called Race\'n\'Chase, however, a glitch made the police cars go crazy, ramming the player. This glitch was so popular with testers that they rebuilt the game around it, creating GTA.',
	'If you beat the video game Twisted Metal III as the demon Minion, he wishes to spend eternity in Hell. In standard Twisted Metal fashion, the wish is turned against him and he is sent to Hell, Michigan.',
	'Henry Cavill almost missed the call for the role of Superman because he was playing "World of Warcraft".',
	'A father made his son work his way to modernity by playing through the history of video games chronologically rather than let him play whatever video game he wanted. The boy started with 1979\'s Galaxian.',
	'Best Buy removed the fighting video game "Primal Rage" from its shelves after an Arizona woman complained that her 11-year-old son had faithfully portrayed one of the game\'s gorilla-like character\'s "golden shower/urination" fatality move.',
	'Goldeneye 007 for N64 only had 9 developers on the team, and 8 of them had never worked on video games before.',
	'A study surveying 5000 children on the video game and social habits, came to a conclusion that those playing video games on a regular basis are more satisfied with their lives, are less prone to being hyperactive, have less emotional issues than those who don’t play video games at all.',
	'During WW2, the British government, with the cooperation of the game’s publisher, hid real bank notes among Monopoly money. Compasses, metal files, and a folded silk map—which was less likely to disintegrate than a paper one—were also concealed inside the box to help the POWs flee their captors.',
	'The number of permutations within a deck of cards is mind-bogglingly large: 8 x 10^67 (or an 8 with 67 zeroes after it). That means there are more card combinations than stars in the Milky Way.',
	'$8.86 is an average price for a game on Steam, a popular game engine.',
	// 20
	'According to the Steam game statistics of 2019 there were approximately 25 games a day released on the platform. This amounts to about 50% of all games released in 2019.',
	'PUBG became one of the most popular RPG/shooter in 2019. It counted more than half a million active players every day during 2019.',
	'Mortal Kombat was developed in ten months by a team of four people.',
	'The Game Boy version of Tetris was the first game played in space. It was played by Russian cosmonaut Aleksandr A. Serebrov in 1993.',
	'The US Army used to have an esports team. However, this caused a lot of protest in America because to many people this wasn\'t a good usage of government funding and therefore it was shut down very soon after.',
];

client.on('message', message => {
const embedOne = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('All Commands')
	.addField('r!ww1', 'Get a random fact about the First World War!')
	.addField('r!ww2', 'Get a random fact about the Second World War!')
	.addField('r!sports', 'Get a random fact about a sports achievement!')
	.addField('r!gaming', 'Get a random fact about games!')
	.addField('r!invite', 'Get the link to invite my bot!')
	.addField('NEWS', 'We\'ve changed the bot prefix to "r!" due to many requests. From now on, to use the bot, do r![topic]. For example, r!help.')
	.setFooter('Add my bot - r!invite');
const embedTwo = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.addField('Topic - WW1', resOne[Math.floor(Math.random() * resOne.length)])
   	.setFooter('Add my bot - r!invite');
const embedThree = new Discord.MessageEmbed()
	.setColor('#0099ff')
    	.addField('Topic - WW2', resTwo[Math.floor(Math.random() * resTwo.length)])
    	.setFooter('Add my bot - r!invite');
const embedFour = new Discord.MessageEmbed()
	.setColor('#0099ff')
    	.addField('Topic - Sports', resThree[Math.floor(Math.random() * resThree.length)])
    	.setFooter('Add my bot - r!invite');
const embedFive = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.addField('Topic - Gaming', resFour[Math.floor(Math.random() * resFour.length)])
	.setFooter('Add my bot - r!invite');
const inviteLink = new Discord.MessageEmbed()
    	.setColor('#0054ff')
   	.addField('Add my bot here:', 'http://bit.ly/randomfactsbot')
	.addField('Join the support server here:', 'https://discord.gg/rgdMACf')
	.addField('If you own a server with more than 25 members and you invite the bot, you\'ll be given a special role.', 'Join now!');

	if (message.content === `${prefix}help`) {
   		message.channel.send(embedOne);
	}else if(message.content === `${prefix}ww1`) {
        	message.channel.send(embedTwo);
	}else if(message.content === `${prefix}ww2`) {
    		message.channel.send(embedThree);
	}else if(message.content === `${prefix}sports`) {
    		message.channel.send(embedFour);
	}else if(message.content === `${prefix}gaming`) {
    		message.channel.send(embedFive);
	}else if(message.content === `${prefix}invite`) {
    		message.channel.send(inviteLink);
}
});

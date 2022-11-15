import DiscordBotImage from '../assets/discord-bot.png'
import AudioStockImage from '../assets/audiostock.webp'
import LodeRunnerImage from '../assets/loderunner.png'

export const ProjectList = [
    {
        title: 'Discord Bot Game (RPG)',
        image: DiscordBotImage,
        description: 'Многопользовательская ролевая игра на Discord-сервере, в которой игрок сможет почувствовать себя на месте настоящего программиста.',
        skills: "Java (Core, Collections, JDBC), JavaCordAPI, Maven, MySQL"
    },
    {
        title: 'Audiostock Web application',
        image: AudioStockImage,
        description: 'Интернет-сервис, где музыканты и саунд-дизайнеры могут продавать свою музыку и аудио-эффекты контент-мейкерам для использования в других проектах.',
        skills: "Java (Core, Collections), Spring Framework (Data JPA, Security, Testing), Thymeleaf, Maven, MySQL",
        video: "JxYeSmb8Z7g"
    },
    {
        title: 'Lode Runner Bot',
        image: LodeRunnerImage,
        description: 'Минихакатон от EPAM, в котором участникам предстояло написать алгоритм для бота, целью которого было получить максимальное количество очков за отведенное время.',
        skills: "Java (Core, Collections), JavaCord (Discord bot library), Gradle, MySQL"
    }
]
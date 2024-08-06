package reactapp_server.spring_v1;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import reactapp_server.spring_v1.Entities.Article;
import reactapp_server.spring_v1.Entities.ArticleBlock;
import reactapp_server.spring_v1.Entities.Picture;
import reactapp_server.spring_v1.Repositories.ArticleRepository;

import java.util.Arrays;

@Component
public class DataInitializer implements CommandLineRunner {

    private final ArticleRepository articleRepository;

    @Autowired
    public DataInitializer(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    @Override
    public void run(String... args) throws Exception {
        Article article1 = new Article();
        article1.setTitle("Space and Exploration");

        String spaceExplorationContent = FileReader.readFileToString("content/space_exploration.md");
        String curiosityRoverContent = FileReader.readFileToString("content/curiosity_rover.md");

        ArticleBlock block1 = new ArticleBlock("Astronomy ", spaceExplorationContent, article1);
        ArticleBlock block2 = new ArticleBlock("Curiosity Rover Self-Portrait", curiosityRoverContent, article1);

        article1.setBlocks(Arrays.asList(block1, block2));

        Picture picture1 = new Picture("1.jpg", "Buzz Aldrin taking a sample of lunar core during the Apollo 11 mission", block1);
        Picture picture2 = new Picture("2.jpg", "Self-portrait of the Curiosity rover on the surface of Mars", block2);
        Picture picture3 = new Picture("3.jpg", "Part of a series on\n" +
                "Spaceflight", block1);

        block1.setPictures(Arrays.asList(picture1, picture3));
        block2.setPictures(Arrays.asList(picture2));

        articleRepository.save(article1);

        /////////////////////

        Article article2 = new Article();
        article2.setTitle("Targets of exploration");

        String Targets_of_exploration = FileReader.readFileToString("content/Targets_of_exploration.md");
        String planets = FileReader.readFileToString("content/planets.md");

        ArticleBlock block3 = new ArticleBlock("Targets of exploration", Targets_of_exploration, article2);
        ArticleBlock block4 = new ArticleBlock("Planets", planets, article2);

        article2.setBlocks(Arrays.asList(block3, block4));

        Picture picture4 = new Picture("4.jpg", "A MESSENGER image from 18,000 km showing a region about 500 km across (2008)", block4);
        Picture picture5 = new Picture("5.jpg", "The Sun, filmed through a clear solar filter", block4);
        Picture picture6 = new Picture("6.jpg", "The Sun, filmed through a clear solar filter", block3);


        block4.setPictures(Arrays.asList(picture4, picture5));
        block3.setPictures(Arrays.asList(picture6));


        articleRepository.save(article2);
    }
}
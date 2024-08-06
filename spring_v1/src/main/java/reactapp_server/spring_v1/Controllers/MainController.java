package reactapp_server.spring_v1.Controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactapp_server.spring_v1.Entities.Article;
import reactapp_server.spring_v1.Entities.Message;
import reactapp_server.spring_v1.Repositories.ArticleRepository;
import reactapp_server.spring_v1.Repositories.MessageRepository;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class MainController {

    private final ArticleRepository articleRepository;
    private final MessageRepository messageRepository;

    @Autowired
    public MainController(ArticleRepository articleRepository, MessageRepository messageRepository) {
        this.articleRepository = articleRepository;
        this.messageRepository = messageRepository;
    }

    @GetMapping("/articles/{id}")
    public ResponseEntity<Article> getArticleById(@PathVariable Long id) {
        Optional<Article> article = articleRepository.findById(id);
        if (article.isPresent()) {
            return ResponseEntity.ok(article.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/messages")
    public List<Message> getAllMessages() {
        return messageRepository.findAll();
    }

    @PostMapping("/messages")
    public ResponseEntity<Message> addMessage(@RequestBody Message message) {
        try {
            Message savedMessage = messageRepository.save(message);
            return ResponseEntity.ok(savedMessage);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }
}

package reactapp_server.spring_v1.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor

public class ArticleBlock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(columnDefinition = "TEXT")
    private String content;

    @ManyToOne
    @JoinColumn(name = "article_id")
    @JsonBackReference
    private Article article;

    @OneToMany(mappedBy = "block", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private List<Picture> pictures = new ArrayList<>();

    public ArticleBlock(String title, String content, Article article) {
        this.title = title;
        this.content = content;
        this.article = article;
    }

    @Override
    public String toString() {
        return "ArticleBlock{id=" + id + ", title='" + title + "', content='" + content + "'}";
    }
}

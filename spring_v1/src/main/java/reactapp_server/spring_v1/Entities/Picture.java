package reactapp_server.spring_v1.Entities;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Picture {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String src;
    private String caption;

    @ManyToOne
    @JoinColumn(name = "block_id")
    @JsonBackReference
    private ArticleBlock block;

    public Picture(String src, String caption, ArticleBlock block) {
        this.src = src;
        this.caption = caption;
        this.block = block;
    }

    @Override
    public String toString() {
        return "Picture{id=" + id + ", src='" + src + "', caption='" + caption + "'}";
    }
}

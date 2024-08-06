package reactapp_server.spring_v1.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import reactapp_server.spring_v1.Entities.Message;

public interface MessageRepository extends JpaRepository<Message, Long> {
}


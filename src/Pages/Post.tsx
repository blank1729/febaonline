import { FunctionalComponent } from "preact";
import BlogPost from "../components/Blog/Post";

const content =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque et enim velit quod inventore nemo, voluptatibus nisi corporis odio soluta, veritatis ab optio corrupti a ipsam iste, dolore voluptatum asperiores? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora harum blanditiis perferendis enim cupiditate nisi laudantium dolorem aperiam ipsam dignissimos ad commodi quam eos, quisquam saepe sunt laboriosam dolores odio. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus odio in possimus cupiditate harum numquam quibusdam nobis molestiae voluptatum esse nostrum consequatur magnam, est culpa excepturi sapiente voluptatem quos blanditiis at dicta. Corporis nam est, cum sapiente, autem excepturi voluptates fugit dolorum nihil explicabo voluptas? Asperiores, reprehenderit suscipit adipisci fuga quidem corporis perspiciatis laboriosam ad, deserunt ullam delectus qui! Cupiditate ipsam repudiandae laboriosam ut, impedit iste, consectetur aliquid optio distinctio iusto quae nostrum saepe dignissimos? Sunt impedit quod corrupti iste molestiae quibusdam ducimus dolorem qui veniam modi, cupiditate voluptatem cum, voluptatibus vitae laborum ex architecto. Exercitationem aut laboriosam consectetur enim dolor voluptatum? Itaque quis porro, corporis deserunt rerum eos autem excepturi ducimus optio veniam, nihil, dolorem aperiam commodi nostrum. Explicabo aliquid qui suscipit non ratione expedita perferendis sequi numquam magni similique commodi neque vel error sint deserunt est iste, doloremque eum amet distinctio aperiam dolor? Esse adipisci illum ratione voluptatum sunt recusandae accusantium, quidem repellat ipsa quisquam at dolor minima, nam optio. Ut non inventore at. Architecto, dignissimos. Amet nisi, culpa quasi quos et minus! Omnis qui voluptatum ipsa voluptatibus facere voluptas mollitia. Sit in enim minima error fugit, perspiciatis accusamus similique ducimus? Iste laborum aut quam id mollitia molestiae doloremque debitis corporis quis aliquid voluptas accusantium sed cupiditate ipsum inventore, quia non est. Tenetur excepturi commodi in. Nam, omnis? Laudantium, officia numquam iure excepturi ratione enim ducimus sed unde itaque distinctio. Cum, in. Delectus, enim. Quisquam quaerat dolore corporis accusamus maxime eos ut at quos quasi mollitia assumenda aut praesentium nostrum, laborum voluptatum atque! Ducimus quo consequuntur, nobis rem nemo aut ut delectus maiores, magnam explicabo at facere! Aperiam saepe rem tempora qui. Alias tempore esse numquam natus quisquam eaque fugiat atque rerum vel fugit. Esse nisi tempora quisquam aut sed non aperiam est sequi! Voluptatum consectetur dolore illo aut totam laudantium commodi quaerat ipsa. Quod aut optio voluptas! Consequatur numquam qui, perferendis sint dolorem impedit similique minus accusantium aperiam sit adipisci? Beatae quam quis voluptatibus assumenda mollitia aperiam laudantium molestiae ullam excepturi, voluptatum nemo provident aspernatur optio? Sunt ipsam explicabo sapiente praesentium voluptatem, cumque quasi nesciunt cupiditate illo exercitationem magni facere modi repudiandae repellat cum enim. Provident sit natus molestias aperiam. Vel, ipsa nostrum? A atque possimus voluptas fugit cupiditate iste veritatis, sed cum libero odio autem, veniam voluptate laboriosam laborum in iusto doloremque quaerat deleniti architecto culpa maxime suscipit. Mollitia est ipsam perspiciatis tempora dicta hic omnis aliquam animi odio quia velit eum, dignissimos at atque cum? Et a assumenda mollitia. Eveniet similique necessitatibus doloremque, provident eos optio numquam dolores voluptate reiciendis, nesciunt ducimus cumque asperiores maxime vel quos tempora illum porro culpa modi. Recusandae, nisi animi! Natus accusantium nulla repudiandae qui veniam quisquam quaerat culpa placeat? Magnam, deserunt tenetur. Adipisci quibusdam tenetur distinctio in! Voluptate, nesciunt libero. Quod beatae, ad ipsam, excepturi laboriosam maiores voluptas soluta vitae est perferendis fugit perspiciatis distinctio corrupti consequatur aliquid veniam repellat ut commodi tempora odit. Odit praesentium dicta voluptatibus sequi? Expedita unde molestias hic non rerum culpa eius ad dicta!";

const dummyData = {
  image: "/image.jpg",
  title: "Lorem ipsum dolor sit amet",
  date: "May 20, 2023",
  author: "John Doe",
  tags: ["Technology", "Web Development", "UI/UX"],
  content: content,
};

const Post: FunctionalComponent = () => {
  return (
    <BlogPost
      image={dummyData.image}
      title={dummyData.title}
      date={dummyData.date}
      author={dummyData.author}
      tags={dummyData.tags}
      content={dummyData.content}
    />
  );
};

export default Post;

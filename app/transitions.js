export default function() {

  // Home <--> Register
  this.transition(
    this.fromRoute('home'),
    this.toRoute('register'),
    this.use('toRight'),
    this.reverse('toLeft')
  );

  // Home <--> About
  this.transition(
    this.fromRoute('home'),
    this.toRoute('about'),
    this.use('toRight'),
    this.reverse('toLeft')
  );

  // Register <--> Thanks
  this.transition(
    this.fromRoute('register'),
    this.toRoute('thanks'),
    this.use('toRight'),
    this.reverse('toLeft')
  );

  // Register <--> Details
  this.transition(
    this.fromRoute('register'),
    this.toRoute('details'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
}

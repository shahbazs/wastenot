export default function() {

  // Home <--> About
  this.transition(
    this.fromRoute('home'),
    this.toRoute('about'),
    this.use('toRight'),
    this.reverse('toLeft')
  );

  // Home <--> Services
  this.transition(
    this.fromRoute('home'),
    this.toRoute('services'),
    this.use('toRight'),
    this.reverse('toLeft')
  );

  // Home <--> Register
  this.transition(
    this.fromRoute('home'),
    this.toRoute('register'),
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

  // Details <--> Thanks
  this.transition(
    this.fromRoute('details'),
    this.toRoute('thanks'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
}

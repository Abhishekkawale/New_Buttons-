export class Group {
  id: number | null;
  name: string;
  age: number | null; 
  major: string | null; 
  role: string | null; 

  constructor(group: Partial<Group> = {}) {
      this.id = group?.id || null;
      this.name = group?.name || '';
      this.age = group?.age || null; 
      this.major = group?.major || null; 
      this.role = group?.role || null; 
  }
}

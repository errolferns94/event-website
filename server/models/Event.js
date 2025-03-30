// This is optional but helps maintain structure
module.exports = {
  tableName: 'events',
  columns: {
    id: { type: 'serial', primaryKey: true },
    title: { type: 'text', required: true },
    description: { type: 'text', required: true },
    date: { type: 'timestamp', required: true, default: 'now()' },
    location: { type: 'text', required: true },
    created_at: { type: 'timestamp', default: 'now()' }
  }
};